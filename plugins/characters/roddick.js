main = require('../main.js');
mainCharacters = require('./main.js');
var items = require('../items/itemList.js')
var input = require('input');
var aqua = '\u00a73'
var red = '\u00a7c'
var blue = '\u00a79'
var darkGreen = '\u00a72'
var green = '\u00a7a'
var reset ='\u00a7r'


//For opening quest
var question1 = function(player, stats, quest){
  var timeout = setTimeout( function() {
    main.updateQuest(4, player.name, "openingQuest", "progress")
    }, 20000);
  var roddick = mainCharacters.getCharacter("Roddick");
  	echo(player, "<Roddick> " + darkGreen + "How did you end up falling off one of things anyways?");
  	sleep(500);
  	echo(player, blue + "(1)" + reset + " I came from another realm, not an airship.");
  	echo(player, red + "(2)" + reset + " I was pushed.");
  	input( player, green + "(3)" + reset + " I don't remember.", function( input, repeat ) {
    if ( input == 1 ) { 
      echo(player, "<Roddick>" + darkGreen + " Another realm, you say? It seems that fall may have caused more damage than it seemed.");
      main.updateQuest(quest, player.name, "openingQuest", "progress");
      mainCharacters.updateCharacter(-2, "Roddick", player.name, "friendship");
      main.updateQuest(false, player.name, "openingQuest", "active");
      main.updateQuest(true, player.name, "openingQuest", "complete");
      clearTimeout(timeout);
    } else if ( input == 2 ){
      echo( player, "<Roddick> " + darkGreen + "Pushed? On purpose? That's a pretty grave crime. You should report this incident to the authorities.");
      main.updateQuest(quest, player.name, "openingQuest", "progress");
      mainCharacters.updateCharacter(0, "Roddick", player.name, "friendship");
      main.updateQuest(false, player.name, "openingQuest", "active");
      main.updateQuest(true, player.name, "openingQuest", "complete");
      clearTimeout(timeout);
    } else if (input == 3){
      echo(player, "<Roddick>" + darkGreen + " You've lost your memory? I'm sorry to hear that. I don't think I can get your memory back, but if there's anything you need, I'll see what I can do for you.");
      mainCharacters.updateCharacter(1, "Roddick", player.name, "friendship");
      main.updateQuest(quest, player.name, "openingQuest", "progress");
      main.updateQuest(false, player.name, "openingQuest", "active");
      main.updateQuest(true, player.name, "openingQuest", "complete");
      clearTimeout(timeout);
    } else if (input == 'q'){
      main.updateQuest(4, player.name, "openingQuest", "progress");
      clearTimeout(timeout);
    } else {
      echo(player, 'Invalid input. Please enter just the number matching your response.');
      clearTimeout(timeout);
      repeat();
    }
  });
}


//for Fishing Intro Quest
var question2 = function(player, stats, quest){
  var roddick = mainCharacters.getCharacter("Roddick");
  echo(player, "<Roddick> " + darkGreen + "So, do you want a job?");
  echo(player, blue + "(1)" + reset + " Yes");
  input( player, red + "(2)" + reset + " No", function( input, repeat ) {
    if (input == 1){
      echo(player, "<Roddick> " + darkGreen + "Excellent! Then let's get started.");
      main.updateQuest(true, player.name, quest, "active");
      main.updateQuest(1, player.name, quest, "progress");
    } else if (input == 2){
      echo(player, "<Roddick> " + darkGreen + "I see. Well, if you change your mind, I'll be here.");
    } else if (input == 'q'){
    } else {
      echo(player, 'Invalid input. Please enter just the number matching your response.');
      repeat();
    }
  });
}


//Handles all interactions with Roddick.
exports.talkToRoddick = function(player){
  var stats = main.getQuest(player.name);
  if (stats.openingQuest.active){
    var oQProgress = stats.openingQuest.progress;
    oQProgress += 1
    switch(oQProgress){
    case 5:
      echo(player, "<Roddick> " + darkGreen + "Oh, it's you! I'm glad to see I didn't risk my life saving you for nothing.");
      main.updateQuest(oQProgress, player.name, "openingQuest", "progress");
      break;
    case 6:
      echo(player, "<Roddick> " + darkGreen + "That was quite a fall you took from that airship. It's a wonder you survived the impact alone.");
      main.updateQuest(oQProgress, player.name, "openingQuest", "progress");
      break;
    case 7:
      question1(player, stats, oQProgress);
      break;
    }
  } else if (!stats.fishingIntro){
    var friendship = mainCharacters.getCharacter("Roddick")[player.name].friendship;
    if (friendship > 0){
      echo(player, "<Roddick> " + darkGreen + "Listen, since your memory is all fuzzy I was thinking you might be having some issues keeping your head above water. Financially, that is. If you're willing to do some work, I can pay you for it.");
      main.updateQuest(false, player.name, "fishingIntro", "active");
      main.updateQuest(false, player.name, "fishingIntro", "complete");
    } else if (friendship < 0){
      echo(player, "<Roddick> " + darkGreen + "I don't know what business you have here in Fyre, but if you're looking for some money, I may have a job for you.");
      main.updateQuest(false, player.name, "fishingIntro", "active");
      main.updateQuest(false, player.name, "fishingIntro", "complete");
    }
  } else if (!stats.fishingIntro.active && !stats.fishingIntro.complete){
    question2(player, stats, "fishingIntro")
  } else if (stats.fishingIntro.active){
    var fishingIntroProgress = stats.fishingIntro.progress + 1
    switch (fishingIntroProgress){
      case 2:
        echo(player, "<Roddick> " + darkGreen + "Take this fishing pole. What I need you to do is catch as many fish as you can. Whenever you get a nice bundle of fish, just bring them back to me and I'll pay you fairly for them.");
        main.updateQuest(fishingIntroProgress, player.name, "fishingIntro", "progress");
        var timeout = setTimeout( function() {
        items.give(player, "novice rod")
    }, 5000);
        break;
      case 3:
        echo(player, "<Roddick> " + darkGreen + "And uh... *ehem* if you happen to stumble across anything that might seem important to someone, would you mind letting me take a look at it?");
        main.updateQuest(fishingIntroProgress, player.name, "fishingIntro", "progress");
        break;
      case 4:
        echo(player, "<Roddick> " + darkGreen + "How's your fishing going?");
    }
  }
}

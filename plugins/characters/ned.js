main = require('../main.js');
mainCharacters = require('./main.js');
var input = require('input');
var aqua = '\u00a73'
var red = '\u00a7c'
var blue = '\u00a79'
var reset ='\u00a7r'


/*
/summon Villager ~ ~1 ~ {
	CustomName:"Ned",
	CustomNameVisible:1,
	Profession:4,
	Career:1,
	CareerLevel:6,
	Attributes:[{
		Name:generic.movementSpeed,Base:.001
	}],
	Invulnerable:1,
	PersistenceRequired:1,
	Silent:1
}
*/


var oQPrompt1 = function(player, oQProgress){
	var timeout = setTimeout( function() {
    	main.updateQuest(1, player.name, "openingQuest", "progress")
		}, 20000);
	var ned = mainCharacters.getCharacter("Ned");
	echo(player, "(Choose a response by typing 'T' then input the number in parentheses next to it or type \'q\' to leave this conversation.)");
    echo(player, blue + '(1)' + reset + ' Thank you.');
    input( player, red + '(2)' + reset + ' I didn\'t need your help', function( input, repeat ) {
      	if ( input == 1 ) { 
      		clearTimeout(timeout)
        	echo(player, '<Ned> ' + aqua + 'It was no trouble. I had the easy job. If you want to thank someone, thank Roddik. He should be out by the docks.');
        	main.updateQuest(oQProgress, player.name, "openingQuest", "progress")
        	mainCharacters.updateCharacter(1, "Ned", player.name, "friendship")
     	} else if ( input == 2 ){
     		clearTimeout(timeout)
        	echo( player, '<Ned>' + aqua + ' Well, like it or not, you got help anyways. I guess I\'ll let you be on your way now.');
        	main.updateQuest(oQProgress, player.name, "openingQuest", "progress")
        	mainCharacters.updateCharacter(-1, "Ned", player.name, "friendship")
      	} else if (input == 'q'){
      		clearTimeout(timeout)
      		main.updateQuest(1, player.name, "openingQuest", "progress")
      	} else {
      	  	echo(player, 'Invalid input. Please enter just the number matching your response.');
      	  	clearTimeout(timeout)
        	repeat()
      	}	
	});
}


exports.talkToNed = function(player){
	var stats = main.getQuest(player.name);
	var oQProgress = stats.openingQuest.progress;
	if (stats.openingQuest.active){
		oQProgress += 1
		switch(oQProgress){
		case 2:
			echo(player, "<Ned>" + aqua + " Ah, you're awake!");
			main.updateQuest(oQProgress, player.name, "openingQuest", "progress")
			break;
		case 3:
			echo(player, "<Ned> " + aqua + "We saw you fall from the sky into the bay. Roddik jumped in and saved you, but you've been out cold since. I've been looking after you for the past few hours.");
			main.updateQuest(oQProgress, player.name, "openingQuest", "progress")
			break;
		case 4:
			oQPrompt1(player, oQProgress);
			main.updateQuest(oQProgress, player.name, "openingQuest", "progress")
			break;
		case 5:
			var friendship = mainCharacters.getCharacter("Ned")[player.name].friendship;
			if (friendship === 1){
				echo(player, "<Ned> " + aqua + "Please talk to Roddik. He should be at the docks just southeast of here");
			} else {
				echo(player, "<Ned> " + aqua + "Look, if you don't want help, that's fine; But the least you can do is talk to Roddick. He should be at the docks to the southeast.");
			}
			break;
		}
	}
}



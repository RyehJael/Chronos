var main = require('../main.js')
var roddick = require('../characters/roddick.js')
var ned = require('../characters/ned.js')
var input = require('input');
var red = '\u00a74'
var blue = '\u00a79'


exports.openingQuest = function(player){
    main.warp(player, 298,117,9,'darkroom');
    player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.BLINDNESS, 1000, 1);
    player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.NIGHTVISION, 1000, 1);
    setTimeout(function(){
      echo(player, '<Chronos>' + red + 'You do not belong here, human. This is my domain, and there is no room for mortals.');
      main.sleep(4000);
      echo(player, '<Chronos> ' + red + 'But how...? How did you get here? And why do I feel so weak?');
      main.sleep(4000);
      echo(player, '<Chronos> ' + red + 'It is like a part of me has died.');
      main.sleep(4000);
      echo(player, '<Chronos> ' + red + 'Wait. I... Recognize you. But I have never seen you before.');
      main.sleep(4000);
      echo(player, '<Chronos> ' + red + 'Who are you?!');
      main.sleep(4000);
      echo(player, '<Chronos> ' + red + '...');
      main.sleep(2000);
      echo(player, '<Chronos> ' + red + 'You do not even know who you are. By entering my realm, you have lost yourself. All of your memories, everything you once were, is gone.');
      main.sleep(6500);
      echo(player, '<Chronos> ' + red + 'I should kill you. Yet, there are too many unanswered questions for you to die now.');
      main.sleep(4000);
      echo(player, '<Chronos> ' + red + 'You will return to your world. There, you will answer my questions. I will remember who you are, and I will get back what I have lost.');
      main.sleep(5000);
      echo(player, '<Chronos> ' + red + 'Now Go.');
      main.sleep(1500)
      warp(player, 407, 300, -25, 'baySky');
      player.removeAllPotionEffects();
      main.sleep(6000);
      player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.BLINDNESS, 800, 1);
      main.sleep(2000);
      player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.NIGHTVISION, 800, 1);
      echo(player, '<Distant Voice> ' + blue + 'Out there! Someone\'s drowning!');
      main.sleep(5000);
      main.warp(player, 300, 71, -55, 'inn');
      player.removeAllPotionEffects();
      main.updateQuest(1, player.name, "openingQuest", "progress");
      main.updateQuest(true, player.name, "openingQuest", "active")
    },1000)
}






  
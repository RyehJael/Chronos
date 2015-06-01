exports.sleep = function(milliseconds){
  var start = new Date().getTime();
  while (new Date().getTime() < start + milliseconds ){}
}

var input = require('input');
var openQuest = persist('openingQuest',{players:{}});
var characters = persist('characters',{})
if (!characters.ned) characters.ned = {};

characters.ned.dialog = [
  '<Ned> Ah! You\'re awake.',
  '<Ned> We saw you fall from the sky into the bay. Roddik jumped in and saved you, but you\'ve been out cold since. I\'ve been looking after you for the past few hours.',
  function(player){
  if (!characters.ned[player.name]) characters.ned[player.name] = {friendship: 0};
  echo(player, '(Choose a response by typing and entering the number in parentheses next to it or type \'q\' to leave this conversation.)');
  echo(player, '(1) Thank you.');
  input( player, '(2) I didn\'t need your help', function( input, repeat ) {
    if ( input == '1' ) { 
      echo(player, '<Ned> It was no trouble. I had the easy job. If you want to thank someone, thank Roddik. He should be out by the docks.');
      characters.ned[player.name].friendship = 1
    } else if ( input == 2 ){
      echo( player, '<Ned> Well, like it or not, you got help anyways. I guess I\'ll let you be on your way now.');
      characters.ned[player.name].friendship = -1
    } else if (input == 'q'){
      return
    } else {
      echo(player, 'Invalid input. Please enter the number matching your response.');
      repeat()
    }
  });

}
]



function talkToNed(player){
  if (!characters.ned[player.name]) characters.ned[player.name] = {progress: 0};
  var nedDialog = characters.ned.dialog[characters.ned[player.name].progress];
  if (typeof nedDialog == 'string'){
    echo(player,nedDialog);
  } else {
    nedDialog(player)
  } 
  if (characters.ned[player.name].progress < characters.ned.dialog.length - 1 ){
     characters.ned[player.name].progress += 1;
  } else {
    characters.ned[player.name].progress = 0;
  }
}


function newGame(event){
  var player = event.getPlayer();
    if (openQuest.players[player.name].progress) return
    warp(player, 298,117,9,'darkroom')
    player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.BLINDNESS, 1000, 1);
    player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.NIGHTVISION, 1000, 1);
    setTimeout(function(){
      echo(player, '<Chronos> You do not belong here, human. This is my domain, and there is no room for mortals.');
      sleep(4000);
      echo(player, '<Chronos> But how...? How did you get here? And why do I feel so weak?');
      sleep(4000);
      echo(player, '<Chronos> It is like a part of me has died.');
      sleep(4000);
      echo(player, '<Chronos> Wait. I... Recognize you. But I have never seen you before.');
      sleep(4000);
      echo(player, '<Chronos> Who are you?!');
      sleep(4000);
      echo(player, '<Chronos> ...');
      sleep(2000);
      echo(player, '<Chronos> You do not even know who you are. By entering my realm, you have lost yourself. All of your memories, everything you once were, is gone.');
      sleep(6500);
      echo(player, '<Chronos> I should kill you. Yet, there are too many unanswered questions for you to die now.');
      sleep(4000);
      echo(player, '<Chronos> You will return to your world. There, you will answer my questions. I will remember who you are, and I will get back what I have lost.');
      sleep(5000);
      echo(player, '<Chronos> Now Go.');
      sleep(1500)
      warp(player, 407, 300, -25, 'baySky');
      player.removeAllPotionEffects();
      sleep(6000);
      player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.BLINDNESS, 800, 1);
      sleep(2000);
      player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.NIGHTVISION, 800, 1);
      echo(player, '<Distant Voice> Out there! Someone\'s drowning!');
      sleep(5000);
      warp(player, 299, 71, -55, 'inn');
      player.removeAllPotionEffects();
      openQuest.players[player.name] = {progress: 1};
    },1000)
}

function characterInteraction(event){
  var player = event.player
  var entity = event.entity
  var entityName = event.entity.getName();
  if (entityName == 'Ned'){
    talkToNed(player)
  }
  if (entityName == 'Roddick'){
    talktoRoddick(player)
  }
}
events.entityRightClick(characterInteraction)


function warp(player,x,y,z,name){
	var location = new Packages.net.canarymod.api.world.position.Location(x,y,z)
	var warp = new Packages.net.canarymod.warp.Warp(location,name)
	warp.warp(player)	
}

events.connection( newGame );


function chat(event){
  player = event.getPlayer()
  message = event.getMessage()
  reciever = event.getReceiverList()
  message = event.buildSendMessage()
  format = event.getFormat()
  console.log(format)

}
events.chat(chat)

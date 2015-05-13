

// events.itemDrop(stats.display)




function newGame(event){
  var player = event.getPlayer();
  // if (event.isFirstConnection() == true) {
  	console.log('passed')
  	warp(player, 326,66,-99,'prison')
  	player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.BLINDNESS, 600, 1)
  // }

  // var score = event.player.score;
  // server.consoleCommand("scoreboard players add @a playtime 1");
  // server.consoleCommand("scoreboard players remove @a playtime 1");
  // server.consoleCommand("effect @a[score_playtime_min=0,score_playtime=0] night_vision 1000");
  // server.consoleCommand("effect @a[score_playtime_min=0,score_playtime=0] blindness 1000");
  // server.consoleCommand("tp @a[score_playtime_min=0,score_playtime=0] 325 67 -99");
  // sleep(200)
  // server.consoleCommand("tellraw @a[score_playtime_min=0,score_playtime=0] {text:\"\",extra:[{text:\" Welcome to Realms of Chronos. Before you begin your adventure, let's get to know a bit about you and help you get to know a bit about us.\",color:gold}]}");
  // sleep(500);
  // server.consoleCommand("tellraw @a[score_playtime_min=0,score_playtime=0] {text:\"\",extra:[{text:\"To continue a conversation during a cutscene, simply left click.\"}]}");
  // server.consoleCommand("scoreboard players set @a[score_playtime_min=0,score_playtime=0] playtime 1");
  // server.consoleCommand("");
  // server.consoleCommand("");
  // server.consoleCommand("");
  // server.consoleCommand("");
  // server.consoleCommand("tellraw @a[score_playtime_min=0,score_playtime=0] {text:\"<Ned>\",extra:[{text:\" Oh, good. You're awake.\",color:blue}]}");
  // player.consoleCommand("tp @a[score_playtime_min=0,score_playtime=0] 325 66 -98")
}


function warp(player,x,y,z,name){
	var location = new Packages.net.canarymod.api.world.position.Location(x,y,z)
	var warp = new Packages.net.canarymod.warp.Warp(location,name)
	warp.warp(player)	
}

events.connection( newGame );


// events.on( Packages.net.canarymod.hook.player.PlayerArmSwingHook, function( evt, cancel ) { 
//   echo( evt.player, evt.player.name + ' Swung!');
//   this.unregister();
// } );



function slotChangeHandler(event){
	var player = event.player
	var newSlot = event.getNewValue()
	var oldSlot = event.getOldValue()
	var item = player.inventory.getSlot(newSlot)

	if (item.id == 280) {
		var teleport = require('teleport')
		var utils = require('utils')
		var target = utils.getMousePos(player)
		try {teleport(player,target)} catch(e){}
		event.setNewValue(oldSlot)
	}
	echo(player,item)

}
// events.heldItemChange( slotChangeHandler );







exports.sleep = function(milliseconds){
	var start = new Date().getTime();
	while (new Date().getTime() < start + milliseconds ){}
}
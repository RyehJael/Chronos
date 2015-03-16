
function newGame( event ){
  var player = event.player;
  player.potionEffect.addPotionEffect(BLINDNESS, 1, 1000);
  server.consoleCommand("effect @a night_vision 1000");
  server.consoleCommand("")
  server.consoleCommand("tellraw @a {text:\"<Ned>\",extra:[{text:\" Oh, good. You're awake.\",color:blue}]}")
}
events.inventory( newGame );



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


events.heldItemChange( slotChangeHandler )

// server.consoleCommand("")

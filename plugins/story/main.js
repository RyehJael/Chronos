

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

function itemUse(event){
	var utils = require('utils')
	var	player = event.player
	var	item = event.item
	if ( item.id == 280 ){
		target = utils.getMousePos(player)
		teleport(player,target)
	}
	else if (item.id == 346){
		echo(player, "You used a Fishingrod")
	}
	else if (item.id == 276){
		echo(player, "You used a Diamond Sword")
	}	
	else if (item.id == 145){
		echo(player, "You used an Anvil")
	}
}



events.itemUse(itemUse)
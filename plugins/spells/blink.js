
function blink(event){
	var teleport = require('teleport')
	var utils = require('utils')
	var	player = event.player
	var	item = event.item
	target = utils.getMousePos(player)
	teleport(player,target)
}

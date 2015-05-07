events.connection(opGamemode)

function opGamemode(event){
	var player = event.player
	var isOp = event.player.isOperator()
	if (isOp == true) {
		player.setModeId(1)	
	}	
}
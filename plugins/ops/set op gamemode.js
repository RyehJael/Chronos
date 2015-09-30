function opGamemode(event){
	var player = event.player
	var isOp = event.player.isOperator()
	if (isOp == true) {
		player.setModeId(1);
		player.setDisplayName("\u00A76" + 'Op ' + player.name)
	}	
}

events.connection(opGamemode);

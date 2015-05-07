function blockInteraction(event){
	var player = event.player
	var block = event.getBlockClicked().getTypeId()
	if (block == 145){
		sleep(00)
		player.closeWindow()
		echo(player, 'passed')
	} else {
		echo(player, block)
	}
	
}







events.blockRightClick(blockInteraction)



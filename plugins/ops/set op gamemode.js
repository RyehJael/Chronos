function opGamemode(event){
	var player = event.player
	var isOp = event.player.isOperator()
	if (isOp == true) {
		player.setModeId(1);
		player.setDisplayName('Op ' + player.name)
	}	
}

events.connection(opGamemode);

exports.speed = function(player) {
	echo(player, 'speeding up');
	player.setMotionX(20);
}
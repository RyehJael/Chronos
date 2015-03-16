/*
/summon Villager ~ ~1 ~ {
	CustomName:"Ned",CustomNameVisible:1,Profession:4,Career:1,CareerLevel:6,Attributes:[{
		Name:generic.movementSpeed,Base:.001}],
	Invulnerable:1,PersistenceRequired:1,Silent:1
}
*/


exports.interact = function(player){

	// var topic = interact.store.players[player.name]['ned']
	if (!topic){var topic = 'intro'}

	if (topic == 'intro') {
		echo(player,'Hello ' + player.name + ', my name is Ned')
		topic = 'mission'
	} else if ( topic == 'mission') {
		echo(player,"Go ahead and explore.")
		topic = 'tip'
	} else if ( topic == 'tip' ) {
		echo(player,"Shouldn't you be exploring?")
	}

	// this.store.players[player.name]['ned'] = topic
}

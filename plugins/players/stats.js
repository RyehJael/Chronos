

exports.stats = {

	save: function(player,stats){
		scsave(stats, player.name + '.json')
	},

	load: function(player){
		return scload(player.name + '.json')
	},

	display: function(event){
		var player = event.player
		echo(player, player)
		var stats = loadStats(player)
		if (stats){
			for (var i in stats){
			echo(player,i + ' : ' + stats[i])
		} else {

			saveStats(player,newStats(player))
		}
	
	},

	create: function(player){
		var stats = {
			name: player.name,
			sword: 1,
			bow: 1,
			jump: 1,
			speed: 1,
			stealth: 1,
			pickaxe: 1,
			lockpicking: 1,
			pickpocketing: 1,
			woodcutting: 1,
			farming: 1,
			cooking: 1,
			fishing: 1,
			smithing: 1,
			crafting: 1,
			enchanting: 1,
			defense: 1,
			charisma: 1,
			magic: 1
		}
		echo(player,"passed")
		scsave(stats, player.name + '.json')
	}

}




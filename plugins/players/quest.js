plugin("quests",{
	save: function(player,questName,questStatus){
		store.players[player.name][questName] = questStatus
	} 
},true)

// quests.store.players = quests.store.players || {}
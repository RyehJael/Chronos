plugin("quests",{
	save: function(player,questName,questStatus){
		this.store.players[player.name][questName] = questStatus
	} 
})

// quests.store.players = quests.store.players || {}
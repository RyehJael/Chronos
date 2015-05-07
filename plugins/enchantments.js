





var enchantments = [


	attackBonus: {
		name: 'Attack Bonus',
		description: 'Adds (level x .5) to your sword',
		items: ['sword','axe','shovel','stick'],
		event: 'damage',
		handler: function(event){
			var bonusDamage = parseInt(level) * 0.5
			return bonusDamage
		}
	}


]


function damageHandler(event){
	var item = event.player.itemHeld
	var enchants = []

	for (var i in enchants){



	}



}



events.damage(damageHandler)
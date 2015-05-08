





var enchantments = [
	{
		name: 'Cobble Collector',
		description: 'Increases cobblestone collected 10%',
		items: ['sword','axe','shovel','stick'],
		hook: 'blockDestroy',
		handle: function(event) {
					var number = Math.random(1,10)
					if (number == 1){
						echo(event.player,'You found an extra cobblestone!')
					}
					echo(event.player,number)
				}

	}


]


function getItemEnchantmentNames(item){
	var itemEnchants = ['Cobble Collector']
	// var lore = item.getLore()

	return itemEnchants
}


function enchantmentHandler(event){
	var hookName = event.getHookName
	var item = event.player.getItemHeld()
	var itemEnchants = getItemEnchantmentNames(item)
	console.log(itemEnchants)
	for (var i in itemEnchants){
		var enchant = getEnchantment(itemEnchants[i],hookName)
		if (enchant){
			enchant.handle(event)
		}
	}

}

function getEnchantment(enchantmentName,hookName){
	for (var i in enchantments){
		if (enchantments[i].name == enchantmentName && enchantments[i].hook == hookName ){
			return enchantments[i]
		}
	}
}


events.blockDestroy(enchantmentHandler)
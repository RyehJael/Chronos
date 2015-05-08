
var enchantments = [
	{
		name: 'Cobble Collector',
		description: 'Increases cobblestone collected 10%',
		items: ['sword','axe','shovel','stick'],
		hook: 'BlockDestroyHook',
		handle: function(event) {
					var number = Math.random()
					console.log('random number :' + number)
					if (number <= 0.1){
						echo(event.player,'You found an extra cobblestone!')
					}
				}

	}


]


function getItemEnchantmentNames(item){
	var itemEnchants = ['Cobble Collector']



	return itemEnchants
}


function enchantmentHandler(event){
	var hookName = event.getHookName()
	var item = event.player.getItemHeld()
	var itemEnchants = getItemEnchantmentNames(item)
	for (var i in itemEnchants){
		console.log('hook name:' + hookName)
		var enchantment = getEnchantment(itemEnchants[i],hookName)
		if (enchantment){
			enchantment.handle(event)
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
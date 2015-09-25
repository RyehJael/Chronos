var items = require('items')



var enchantments = [
	{
		name: 'Cobble Collector',
		description: 'Increases cobblestone collected 10%',
		items: ['pickaxe'],
		hook: 'BlockDestroyHook',
		handle: function(event) {
					var block = event.getBlock()
					var blockId = event.getBlock().getTypeId()
					if (blockId == 1){
						var number = Math.random()
						var player = event.getPlayer()
						if (number <= 0.1){
							player.inventory.addItem(4)
						}
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
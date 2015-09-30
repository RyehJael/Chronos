var ItemType = Packages.net.canarymod.api.inventory.ItemType;
var Canary = Packages.net.canarymod.Canary;
var itemFactory = Canary.factory().itemFactory;
var items = require('items');

//Scrawny Cod
var cod1 = items.rawFish(1)
cod1.setDisplayName("\u00A7r Scrawny Cod");
cod1.setMaxAmount(1);


//Novice Rod
var noviceRod = items.fishingRod(1);
noviceRod.setDisplayName("\u00A7r Novice Rod");


//list all created items in this object
var itemList = {
	"scrawny cod": cod1,
	"novice rod": noviceRod
}

//give player any item in itemList.
exports.give = function(player, item){
	player.giveItem(itemList[item])
}


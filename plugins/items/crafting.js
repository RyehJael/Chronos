var items = require('items');
var recipes = require('recipes');
var Recipes = Packages.net.canarymod.api.inventory.recipes.CraftingRecipe;
var RecipeRow = Packages.net.canarymod.api.inventory.recipes.RecipeRow;



// Creates a shapeless recipe
var wand = items.stick(1)
wand.setDisplayName('Wand')
var shapelessRecipe = Recipes.createShapelessRecipe(wand,[items.stick(1),items.stick(1)])
var addedshapelessRecipe = server.addRecipe(shapelessRecipe)



// Creates a shaped recipe
var staff = items.stick(1)
staff.setDisplayName('Staff')
var rows = [
	new RecipeRow("A",[wand]),
	new RecipeRow("A",[items.stick(2)]),
	new RecipeRow("A",[items.stick(1)]),
]
var shapedRecipe = Recipes.createShapedRecipe(staff,rows[0],rows[1],rows[2])
var addedShapedRecipe = server.addRecipe(shapedRecipe)


// Creates a shaped recipe using recipes module
var enderBow = items.bow(1)
enderBow.setDisplayName('Enderbow')
var enderBowRecipe = {
  result: enderBow,
  ingredients: {
    E: items.enderPearl(1),
    S: items.stick(1),
    W: items.string(1)
  },
  shape: [ 'ESW',
           'SEW',
           'ESW' ]
}
recipes.add( enderBowRecipe )


// Creates a shapeless recipe using recipes module
var whip = items.fishingRod(1)
whip.setDisplayName('Whip');
var whipRecipe = {
  result: whip,
  ingredients: [items.stick(1),items.string(1)]
}
recipes.add( whipRecipe )


// Adding recipes to an object or array can make loading them as a group easier.
var customRecipes = {}


var flawlessEmerald = items.emerald(1)
flawlessEmerald.setDisplayName('Flawless Emerald')
flawlessEmerald.setLore('A perfectly cut emerald')
customRecipes['Flawless Emerald'] = {
	result: flawlessEmerald,
	ingredients: [items.emeraldBlock(1),items.emeraldBlock(1),items.emeraldBlock(1),
	items.emeraldBlock(1),items.emeraldBlock(1),items.emeraldBlock(1),
	items.emeraldBlock(1),items.emeraldBlock(1),items.emeraldBlock(1)]
}

var flawlessEmeraldBlock = items.emeraldBlock(1)
flawlessEmeraldBlock.setDisplayName('Flawless Emerald Block')
flawlessEmeraldBlock.setLore('A perfectly cut emerald block')
customRecipes['Flawless Emerald Block'] = {
	result: flawlessEmeraldBlock,
	ingredients: { E: flawlessEmerald },
	shape: ['_E_',
			'EEE',
			'_E_']
}


// function addRecipes(recipesArray){
// 	for (var i in recipesArray){
// 		if (recipesArray[i].result){
// 			var added = recipes.add(recipesArray[i])
// 			console.log('Added recipe : ' + recipesArray[i].result.getDisplayName())
// 		}

// 	}
// }

// addRecipes(customRecipes)

// var inventoryCheck = function(event){
// 	player = event.player;
// 	inventory = event.inventory;
// 	tag = inventory.getMetaTag();
// 	if (event.isClosing()){
// 		echo(player, "closed")
// 		inventory.clearInventory();
// 	} else {
// 		echo(player, "open");
// 		console.log(tag)
// 		inventory.addItem(wand);
// 		inventory.addItem(staff);
// 		inventory.addItem(whip);
// 	}
// }


// events.inventory(inventoryCheck)
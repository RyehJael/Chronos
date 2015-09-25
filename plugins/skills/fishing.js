var main = require('../main.js');
var skills = require('./skills.js');
var items = require('../items/itemList.js')

// var items = require('items');
// var recipes = require('recipes');
// var Recipes = Packages.net.canarymod.api.inventory.recipes.CraftingRecipe;
// var RecipeRow = Packages.net.canarymod.api.inventory.recipes.RecipeRow;


var acheivement = function(event){
	player = event.player;
	stat = event.getStat().getId().toString();
	if (stat === "stat.fishCaught"){
		items.give(player, 'scrawny cod')
	} 
}
events.statGained(acheivement);

var dataCheck = function(event){
	var item = event.getItem();
	var tag = item.getDataTag();
	console.log(tag)

}

events.itemUse(dataCheck)
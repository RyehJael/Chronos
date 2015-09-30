var main = require('../main.js');
var skills = require('./skills.js');
var items = require('../items/itemList.js')

exports.fishCaught = function(player){
	var stats = main.getHero(player.name);
	items.give(player, "scrawny cod")
}

var dataCheck = function(event){
	var item = event.getItem();
	var tag = item.getDataTag();
	console.log(tag)

}

events.itemUse(dataCheck)

var fishTypes = {
	"scrawny cod" : { name: "Scrawny Cod", xp: 7, lvl: 0}
}

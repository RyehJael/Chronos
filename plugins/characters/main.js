ned = require('./ned.js')
roddick = require('./roddick.js')
var characters = persist('characters',{})

if (!characters['Ned']){
	characters['Ned'] = {};
}
if (!characters['Roddick']){
	characters['Roddick'] = {};
}


exports.getCharacter = function(character){
	return characters[character];
};

exports.updateCharacter = function(value, character, player, aspect) {
	if (!characters[character][player]){
		characters[character][player] = {};
	}
	if (!characters[character][player][aspect]){
		characters[character][player][aspect] = {};
	}
	characters[character][player][aspect] = value

}


function characterInteraction(event){
  var player = event.player
  var entity = event.entity
  var entityName = event.entity.getName();
  if (entityName == 'Ned'){
    ned.talkToNed(player)
  }
  if (entityName == 'Roddick'){
    roddick.talkToRoddick(player)
  }
}
events.entityRightClick(characterInteraction)


//Define item for reference
function itemID(event){
	var item = event.item.getItem().getDisplayName();
	console.log(item)
}
events.itemPickup(itemID)


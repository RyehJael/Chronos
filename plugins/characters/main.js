
function characterInteraction(event){

	var player = event.player
	var targetID = event.entity.getName()
	var character = mapCharacter(targetID)
	var ned = require('./ned.js')
	if (character == 'Ned'){
		ned.interact(player)
	} else if (character) {
		echo(player,'Hello. I am ' + character)
	} else {
		echo(player,'My name is ' + targetID)
	}

}


function mapCharacter(id){
	if (id == 216){
		return 'Ned'
	} else if (id == 141){
		return 'Christopher'
	}
}


events.entityRightClick(characterInteraction)
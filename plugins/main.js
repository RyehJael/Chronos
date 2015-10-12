
var heroes = persist('heroes',{});
var quests = persist('quests',{});
// var openingQuest = require('./quests/openingQuest.js');

Game = {}



Game.newGame = function(event) {
	var player = event.getPlayer();
	if (!quests[player.name]){
		quests[player.name] = {};
	}

	if (!heroes[player.name]){
		heroes[player.name] = {};
		heroes[player.name].skills = {};
		heroes[player.name].reputation = {};
	}
	if (!heroes[player.name].stats){
		heroes[player.name].stats = {
			maxHealth: 10,
			health: 10,
			mana: 10,
			strength: 1,
			defense: 1,
			agility: 1,
			armor: 0,
			attack: 0
		}
	}
    // openingQuest.openingQuest(player);
}

Game.initialize = function(event){
	if (heroes[event.player.name]) {
		return
	} else {
		Game.newGame(event)
	}
}
events.connection( Game.initialize );


exports.getHero = function(heroName){
	return heroes[heroName];
};

exports.updateHero = function(value, heroName, category, stat) {
	if (stat) {
		heroes[heroName][category][stat] = value
	} else {
		heroes[heroName][category] = value
		
	}
}

exports.getQuest = function(heroName){
	return quests[heroName];
};

exports.updateQuest = function(value, heroName, quest, threshold) {
	if (!quests[heroName][quest]){
		quests[heroName][quest] = {};
	}
	if (threshold) {
		if (!quests[heroName][quest][threshold]){
			quests[heroName][quest][threshold] = {};
		}
		quests[heroName][quest][threshold] = value
	} else {
		quests[heroName][quest] = value
	}
}

exports.warp = function(player,x,y,z,name){
	var location = new Packages.net.canarymod.api.world.position.Location(x,y,z)
	var warp = new Packages.net.canarymod.warp.Warp(location,name)
	warp.warp(player)	
}

exports.sleep = function(milliseconds){
  var start = new Date().getTime();
  while (new Date().getTime() < start + milliseconds ){}
}

//to be erased
var dataCheck = function(event){
	var item = event.getItem();
	var tag = item.getDataTag();
	console.log(tag)

}
events.itemUse(dataCheck)

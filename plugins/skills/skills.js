var players = persist('players',{})

var levels = mapLevels(1000,100);

function mapLevels(maxLevel,modifier){
  var i = 0;
  var lvls = [];
  while (i < maxLevel){
    lvls[i] = {};
    lvls[i]['next'] = modifier * (i + 1);
    if ( !lvls[i - 1] ){
      lvls[i]['total'] = 0;
    } else {
      lvls[i]['total'] = lvls[i - 1]['total'] + lvls[i - 1]['next'];  
    }
    i++;
 }
 return lvls ;
}

function resetLevel(player){
	players[player.name] = {}
	echo(player, "levels reset")

}



function levelRequirements(){
	var levels = []
	var maxLevel = 1000
	var firstLevel = 100
	var i = 0
	while (i < maxLevel){
		if (i == 0){
			levels[i] = firstLevel	
		} else {

			levels[i] = parseInt( levels[i - 1] * 1.01 + levels[i - 1] )

		}
		i++
	}
	return levels
}

function level(experience){
	for (var i in levels){
		if (experience < levels[i].total){
			return i - 1
		}
	}
	return 1000
}

function addExperience(player,skill,experience){

	if (!players[player.name]){
		players[player.name] = {}
	}
	if (!players[player.name][skill]){
		players[player.name][skill] = 0
	}
	
	var startingLevel = level(players[player.name][skill])
	players[player.name][skill] += experience
	var endingLevel = level(players[player.name][skill])
	if (startingLevel < endingLevel){
		echo(player,startingLevel + ' : ' + endingLevel)
	}
	echo(player, endingLevel + ' : ' + players[player.name][skill])
}



var blockTypes = {
	"1:0[minecraft:stone]" : { name: 'stone', xp: 10, skill: 'mining' },
	"1:1[minecraft:stone]" : { name: 'granite', xp: 11, skill: 'mining'},
	"1:5[minecraft:stone]" : { name: 'andesite', xp: 12, skill: 'mining'},
	"1:3[minecraft:stone]" : { name: 'diorite', xp: 13, skill: 'mining'},
	"24:0[minecraft:sandstone]" : { name: 'sandstone', xp: 15, skill: 'mining'},
	"16:0[minecraft:coal_ore]" : { name: 'coal ore', xp: 20, skill: 'mining'},
	"87:0[minecraft:netherrack]" : { name: 'netherrack', xp: 10, skill: 'mining'},
	"15:0[minecraft:iron_ore]" : {name: 'iron ore', xp: 75, skill: 'mining'},
	"74:0[minecraft:lit_redstone_ore]" : { name: 'redstone ore', xp: 100, skill: 'mining'},
	"21:0[minecraft:lapis_ore]" : { name: 'lapis ore', xp: 150, skill: 'mining'},
	"168:0[minecraft:prismarine]" : {name: 'prismarine', xp: 160, skill: 'mining'},
	"14:0[minecraft:gold_ore]" : { name: 'gold ore', xp: 175, skill: 'mining'},
	"153:0[minecraft:quartz_ore]" : { name: 'quartz ore', xp: 100, skill: 'mining'},
	"56:0[minecraft:diamond_ore]" : { name: 'diamond ore', xp: 200, skill: 'mining'},
	"129:0[minecraft:emerald_ore]" : {name: 'emerald ore', xp: 350, skill: 'mining'},
	"17:0[minecraft:log]" : {name: 'oak log', xp: 25, skill: 'woodcutting'},
	"17:2[minecraft:log]" : {name: 'birch log', xp: 50, skill: 'woodcutting'},
	"17:1[minecraft:log]" : {name: 'spruce log', xp: 100, skill: 'woodcutting'},
	"17:3[minecraft:log]" : {name: 'jungle log', xp: 150, skill: 'woodcutting'},
	"162:0[minecraft:log2]" : {name: 'acacia log', xp: 200, skill: 'woodcutting'},
	"162:1[minecraft:log2]" : {name: 'dark oak log', xp: 300, skill: 'woodcutting'}


}


function blockDestroyHandler(event){
	var player = event.player;
	var block = event.block.getType().toString();
	if (blockTypes[block] == undefined){
		echo(player, block + ' is not mapped.')
	} else {
		var xp = blockTypes[block].xp
		var skill = blockTypes[block].skill
		var name = blockTypes[block].name
		addExperience(player,skill, xp )
		echo(player, name + ' : ' + xp)
	}
	
}

events.blockDestroy(blockDestroyHandler)
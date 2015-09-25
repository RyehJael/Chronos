
var main = require('../main.js')
var unmappedBlocks = persist('unmappedBlocks',[])

exports.addExperience = function(player,skill,experience){
	var hero = main.getHero(player.name).skills;
	if (!hero[skill]){
		main.updateHero(0,player.name,'skills', skill)
	}
	if (hero[skill])
	player.setExperience(hero[skill]);
	player.addExperience(experience);
	var exp = player.getExperience();
	main.updateHero(exp, player.name, 'skills', skill);
}

function xpBlock(event) {
	this.cancel();
}
events.experience(xpBlock)


var blockTypes = {
	"1:0[minecraft:stone]" : { name: 'stone', xp: 3, skill: 'mining', lvl: 0 },
	"48:0[minecraft:mossy_cobblestone]" : { name: 'mossy cobblestone', xp: 3, skill: 'mining', lvl: 15 },
	"1:5[minecraft:stone]" : { name: 'andesite', xp: 5, skill: 'mining', lvl: 25},
	"16:0[minecraft:coal_ore]" : { name: 'coal ore', xp: 90, skill: 'mining', lvl: 100},
	"15:0[minecraft:iron_ore]" : {name: 'iron ore', xp: 200, skill: 'mining', lvl: 150},
	"21:0[minecraft:lapis_ore]" : { name: 'lapis ore', xp: 325, skill: 'mining', lvl: 250},
	"24:0[minecraft:sandstone]" : { name: 'sandstone', xp: 500, skill: 'mining', lvl: 350},
	"14:0[minecraft:gold_ore]" : { name: 'gold ore', xp: 650, skill: 'mining', lvl: 400},
	"1:1[minecraft:stone]" : { name: 'granite', xp: 720, skill: 'mining', lvl: 450},
	"74:0[minecraft:lit_redstone_ore]" : { name: 'redstone ore', xp: 800, skill: 'mining', lvl: 550},
	"1:3[minecraft:stone]" : { name: 'diorite', xp: 1200, skill: 'mining', lvl: 600},
	"87:0[minecraft:netherrack]" : { name: 'netherrack', xp: 1600, skill: 'mining', lvl: 650},
	"153:0[minecraft:quartz_ore]" : { name: 'quartz ore', xp: 2000, skill: 'mining', lvl: 700},
	"168:0[minecraft:prismarine]" : {name: 'prismarine', xp: 4500, skill: 'mining', lvl: 800},
	"56:0[minecraft:diamond_ore]" : { name: 'diamond ore', xp: 6000, skill: 'mining', lvl: 850},
	"129:0[minecraft:emerald_ore]" : {name: 'emerald ore', xp: 10000, skill: 'mining', lvl: 950},
	"17:0[minecraft:log]" : {name: 'oak log', xp: 25, skill: 'woodcutting', lvl: 0},
	"17:2[minecraft:log]" : {name: 'birch log', xp: 50, skill: 'woodcutting', lvl: 0},
	"17:1[minecraft:log]" : {name: 'spruce log', xp: 100, skill: 'woodcutting', lvl: 0},
	"17:3[minecraft:log]" : {name: 'jungle log', xp: 150, skill: 'woodcutting', lvl: 0},
	"162:0[minecraft:log2]" : {name: 'acacia log', xp: 200, skill: 'woodcutting', lvl: 0},
	"162:1[minecraft:log2]" : {name: 'dark oak log', xp: 300, skill: 'woodcutting', lvl: 0},
	"125:0[minecraft:double_wooden_slab]" : {name: 'double oak slab', xp: 0, skill: 'woodcutting', lvl: 0},
	"2:0[minecraft:grass]" : {name: 'grass block', xp: 10, skill: 'excavation', lvl: 0},
	"3:0[minecraft:dirt]" : {name: 'dirt block', xp: 10, skill: 'excavation', lvl: 0},
	"12:0[minecraft:sand]" : {name: 'sand', xp: 30, skill: 'excavation', lvl: 0},
	"82:0[minecraft:clay]" : {name: 'clay', xp: 40, skill: 'excavation', lvl: 0},
	"159:0[minecraft:stained_hardened_clay]" : {name: 'white clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:1[minecraft:stained_hardened_clay]" : {name: 'orange clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:2[minecraft:stained_hardened_clay]" : {name: 'magenta clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:3[minecraft:stained_hardened_clay]" : {name: 'light blue clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:4[minecraft:stained_hardened_clay]" : {name: 'yellow clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:5[minecraft:stained_hardened_clay]" : {name: 'lime green clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:6[minecraft:stained_hardened_clay]" : {name: 'pink clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:7[minecraft:stained_hardened_clay]" : {name: 'gray clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:8[minecraft:stained_hardened_clay]" : {name: 'light gray clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:9[minecraft:stained_hardened_clay]" : {name: 'cyan clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:10[minecraft:stained_hardened_clay]" : {name: 'purple clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:11[minecraft:stained_hardened_clay]" : {name: 'blue clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:12[minecraft:stained_hardened_clay]" : {name: 'brown clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:13[minecraft:stained_hardened_clay]" : {name: 'green clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:14[minecraft:stained_hardened_clay]" : {name: 'red clay', xp: 50, skill: 'excavation', lvl: 0},
	"159:15[minecraft:stained_hardened_clay]" : {name: 'black clay', xp: 50, skill: 'excavation', lvl: 0},
	"172:0[minecraft:hardened_clay]" : {name: 'hardened clay', xp: 50, skill: 'excavation'},
	"44:2[minecraft:stone_slab]" : {name: 'stone slab', xp: 0, skill: 'mining', lvl: 0},
	"126:0[minecraft:wooden_slab]" : {name: 'oak slab', xp: 0, skill: 'woodcutting', lvl: 0},
	"109:0[minecraft:stone_brick_stairs]" : {name: 'stone brick stair', xp: 0, skill: 'mining', lvl: 0}


}


function blockDestroyHandler(event){
	var player = event.player;
	var block = event.block.getType().toString();
	if (blockTypes[block] == undefined){

		// This helps keep track of what blocks can be mapped.
		unmappedBlocks.push(block)

	} else {

		// This helps keep track of what blocks can be mapped.
		// Remove eventually.
		var index = unmappedBlocks.indexOf(block)
		if ( index > -1 ){
			unmappedBlocks.splice(index,1)
		}
		var xp = blockTypes[block].xp
		var skill = blockTypes[block].skill
		var name = blockTypes[block].name
		var lvlReq = blockTypes[block].lvl
		var hero = main.getHero(player.name).skills;
		var mode = player.getModeId();
		player.setExperience(hero[skill]);
		if (player.getLevel() < blockTypes[block].lvl && mode == 2){
			echo(player, "requires " + skill + " level " + lvlReq)
			this.cancel()
		} else {
			addExperience(player,skill, xp)
		}
	}
	
}

events.blockDestroy(blockDestroyHandler)
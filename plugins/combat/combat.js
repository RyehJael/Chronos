var main = require('../main.js')
// var skills = require('../skills/skills.js');




var damageHandler = function(event){
	var attacker = event.attacker;
	var defender = event.defender;
	// var damage = event.damageDealt;
	// var source = event.damageSource;

	if (!attacker) return
	if (!defender) return

	if ( attacker.isPlayer() && defender.isPlayer() ){
		var attackerStats = main.getHero(attacker.name).stats;
		var defenderStats = main.getHero(defender.name).stats;
		// attackerStats.attack = 1
		defenderStats.attack = 1
		var damage = calculateDamage(attackerStats, defenderStats);
		console.log('damage: ' + damage)
		defenderStats.health -= damage
		updateHealthBar(defender,defenderStats)
		// defender.setHealth(defenderStats.health.toFixed(0))
	}

}

var updateHealthBar = function(player,stats){
	var percent = stats.health / stats.maxHealth
	var hearts = 20 * percent.toFixed(2)
	if (hearts < 1){
		stats.health = stats.maxHealth
		player.kill()
	}
	player.setHealth(hearts.toFixed(0))
}

var calculateDamage = function(attacker,defender){
	if ( !statsAreLegit(attacker) || !statsAreLegit(defender)){
		console.log('stats are not legit.')
		return 0
	}
	var defenseReductionRatio = attacker.strength / ( attacker.strength + defender.defense )
	var armorReductionRatio =  attacker.attack / ( attacker.attack + defender.armor )
	var bonusPercent = attacker.strength / 100
	var bonusDamage = attacker.attack * bonusPercent * armorReductionRatio * defenseReductionRatio
	var baseDamage = attacker.attack  
	var damageDealt = baseDamage + bonusDamage
	return damageDealt
}



var statsAreLegit = function(stats){
	return stats.health && stats.attack && stats.defense && stats.maxHealth
}


events.damage(damageHandler)


exports.calculateDamage = calculateDamage



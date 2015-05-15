function newGame(event){
  var player = event.getPlayer();

  // if (event.isFirstConnection() == true) {
  	warp(player, 326,66,-99,'prison')
  	player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.BLINDNESS, 600, 1)
    player.addPotionEffect(Packages.net.canarymod.api.potion.PotionEffectType.NIGHTVISION, 600, 1)
    newEntity()
  // }

  // server.consoleCommand("tellraw @a[score_playtime_min=0,score_playtime=0] {text:\"\",extra:[{text:\" Welcome to Realms of Chronos. Before you begin your adventure, let's get to know a bit about you and help you get to know a bit about us.\",color:gold}]}");
  // sleep(500);
  // server.consoleCommand("tellraw @a[score_playtime_min=0,score_playtime=0] {text:\"\",extra:[{text:\"To continue a conversation during a cutscene, simply left click.\"}]}");
  // server.consoleCommand("scoreboard players set @a[score_playtime_min=0,score_playtime=0] playtime 1");
  // server.consoleCommand("");
  // server.consoleCommand("");
  // server.consoleCommand("");
  // server.consoleCommand("");
  // server.consoleCommand("tellraw @a[score_playtime_min=0,score_playtime=0] {text:\"<Ned>\",extra:[{text:\" Oh, good. You're awake.\",color:blue}]}");
  // player.consoleCommand("tp @a[score_playtime_min=0,score_playtime=0] 325 66 -98")
}


function warp(player,x,y,z,name){
	var location = new Packages.net.canarymod.api.world.position.Location(x,y,z)
	var warp = new Packages.net.canarymod.warp.Warp(location,name)
	warp.warp(player)	
}

events.connection( newGame );

function newEntity(){
  var location = new Packages.net.canarymod.api.world.position.Location(326,66,-99)
  
  console.log(location)
}


// var thing = Packages.ItemFactory().newItem(5)

// console.log(thing)
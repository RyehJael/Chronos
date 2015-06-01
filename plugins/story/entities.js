var cm = Packages.net.canarymod.Canary;
var Canary = Packages.net.canarymod.Canary;
var EntityFactory = Canary.factory().entityFactory;

function NPCs( name, x, y, z ){
	var location = new Packages.net.canarymod.api.world.position.Location(x,y,z)
	var result = EntityFactory.newNPC( name, location )
}

//Chronos NPCs
NPCs('Chronos', 332, 65, -94)
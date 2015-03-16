// Ned

// execute @e[name=Ned] ~ ~ ~ tellraw @a[score_ned=0,score_ned_min=0,score_chat_min=1,r=4] {text:"<Ned>",extra:[{text:" Oh, good. You're awake.",color:blue}]}
// execute @e[name=Ned] ~ ~ ~ tellraw @a[score_ned=0,score_ned_min=0,score_chat_min=1,r=4] {"text":"", "extra": [{"text":"[Next]", "clickEvent":{"action":"run_command", "value":"/trigger talk set 8"}}]}
// execute @e[name=Ned] ~ ~ ~ scoreboard players set @a[score_ned=0,score_ned_min=0,score_chat_min=1,r=5] chat 0

// execute @e[name=Ned] ~ ~ ~ tellraw @a[score_ned=0,score_ned_min=0,score_talk_min=8,score_talk=8] {text:"<Ned>",extra:[{text:" We saw you fall from the sky into the bay. Roddik jumped in and saved you, but you've been out cold since. I've been looking after you for the past few hours.",color:blue}]}
// execute @e[name=Ned] ~ ~ ~ tellraw @a[score_ned=0,score_ned_min=0,score_talk_min=8,score_talk=8] {"text":"", "extra": [{"text":"[Thank you]",color:green, "clickEvent":{"action":"run_command", "value":"/trigger talk set 9"}}]}
// execute @e[name=Ned] ~ ~ ~ tellraw @a[score_ned=0,score_ned_min=0,score_talk_min=8,score_talk=8] {"text":"", "extra": [{"text":"[I didn't need help]",color:red, "clickEvent":{"action":"run_command", "value":"/trigger talk set 10"}}]}
// execute @e[name=Ned] ~ ~ ~ scoreboard players set @a[score_ned=0,score_ned_min=0,score_talk_min=8,score_talk=8] talk 0

// scoreboard players add @a[score_ned=0,score_ned_min=0,score_talk_min=9,score_talk=9] kind 1
// scoreboard players add @a[score_ned=0,score_ned_min=0,score_talk_min=10,score_talk=10] mean 1
// scoreboard players set @a[score_ned=0,score_ned_min=0,score_talk_min=9,score_talk=10] ned 1

// execute @e[name=Ned] ~ ~ ~ tellraw @a[score_ned=1,score_ned_min=1,score_talk_min=9,score_talk=9] {text:"<Ned>",extra:[{text:" It was no trouble. I had the easy job. If you want to thank someone, thank Roddik. He should be out by the docks.",color:blue}]}
// execute @e[name=Ned] ~ ~ ~ playsound mob.villager.yes @a[score_ned=1,score_ned_min=1,score_talk_min=9,score_talk=9] ~ ~ ~
// execute @a[score_ned=1,score_ned_min=1,score_talk_min=9,score_talk=9] ~ ~ ~ execute @e[name=Ned] ~ ~ ~ /particle happyVillager ~ ~ ~ 0 1 0 .2 10

// execute @e[name=Ned] ~ ~ ~ tellraw @a[score_ned=1,score_ned_min=1,score_talk_min=10,score_talk=10] {text:"<Ned>",extra:[{text:" Well, like it or not, you got help anyways. I guess I'll let you be on your way now.",color:blue}]}
// execute @e[name=Ned] ~ ~ ~ playsound mob.villager.no @a[score_ned=1,score_ned_min=1,score_talk_min=10,score_talk=10] ~ ~ ~
// execute @a[score_ned=1,score_ned_min=1,score_talk_min=10,score_talk=10] ~ ~ ~ execute @e[name=Ned] ~ ~ ~ /particle angryVillager ~ ~ ~ 0 1 0 .2 10
// scoreboard players set @a[score_ned=0,score_ned_min=0,score_talk_min=9,score_talk=10] ned 2
// scoreboard players set @a[score_ned=1,score_ned_min=1,score_talk_min=9,score_talk=10] talk 0

var utils = require('utils');
var players = utils.players();
var sounds = require('sounds');
utils.foreach( players, function( player ) { 
  sounds.catMeow( player );                          
} );

var utils = require('utils');
var players = utils.players();
utils.foreach( players, function( player ) { 
  player.capabilities.setMayFly(true);
} );




var store = persist('chat-colors', {players: {}});
exports.chat = { 
  setColor: function(player,chatColor) { 
    store.players[player.name] = chatColor;
  }
}

var colors = ['black', 'blue', 'darkgreen', 'darkaqua', 'darkred',
              'purple', 'gold', 'gray', 'darkgray', 'indigo',
              'brightgreen', 'aqua', 'red', 'pink',
              'yellow', 'white'];
var colorCodes = {};
var COLOR_CHAR = '\u00a7';
for (var i =0;i < colors.length;i++) 
  colorCodes[colors[i]] = i.toString(16);

var addColor = function( evt ) {
  var player = evt.player;
  var playerChatColor = store.players[ player.name ];
  if ( playerChatColor ) {
    evt.message = COLOR_CHAR + colorCodes[ playerChatColor ] + evt.message;
  }
};

if (__plugin.bukkit) {
  events.asyncPlayerChat(addColor);
} else if (__plugin.canary) {
   events.chat(addColor);
};

function chat_color( params, sender ){
  var color = params[0];
  if (colorCodes[color]){
    chat.setColor(sender,color);
  }else{
    echo(sender, color + ' is not a valid color');
    echo(sender, 'valid colors: ' + colors.join(', '));
  }
}
command(chat_color, colors);

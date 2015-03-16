var utils = require('utils'),
    at = require('at');
function warning() {
  utils.players(function( player ) {
    echo( player, 'The night is dark and full of terrors!' );
  });
}

at('19:00', warning);

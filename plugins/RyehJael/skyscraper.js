function myskyscraper( floors ) {
  var i ;
  if ( typeof floors == 'undefined' ) {
    floors = 10;
  }
  // bookmark the drone's position so it can return there later
  this.chkpt('myskyscraper'); 
  for ( i = 0; i < floors; i++ ) {
    this
      .box(blocks.iron,20,1,20)
      .up()
      .box0(blocks.glass_pane,20,3,20)
      .up(3);
  }
  // return the drone to where it started
  this.move('myskyscraper'); 
};
var Drone = require('drone'); 
Drone.extend( myskyscraper );



function skyscraper(floors) {
  var Drone = require('drone');
  if (!floors) { var floors = 10 };
  var d = new Drone(self)
  d.chkpt('skyscraper')
  for ( var i in floors ) {
    d
      .box(blocks.iron,20,1,20)
      .up()
      .box0(blocks.glass_pane,20,3,20)
      .up(3);
  }
  d.move('skyscraper');
}
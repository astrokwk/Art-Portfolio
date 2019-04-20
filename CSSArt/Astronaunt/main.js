var generateStars = function(){
    
  var $galaxy = $(".space");
  var iterator = 0;
  
  while (iterator <= 100){
      var xposition = Math.random();
      var yposition = Math.random();
      var star_type = Math.floor((Math.random() * 3) + 1);
      var position = {
          x : $galaxy.width() * xposition,
          y : $galaxy.height() * yposition,
      };
      
      $(`<div class="star star-type${star_type}"></div>`).appendTo($galaxy).css({
          "top" : position.y,
          "left" : position.x
      });
      
      iterator++;
  }
  // `<div class="star star-type${star_type}"></div>`
};

generateStars();


// var gameScreen = $('#img-area')
// var newWidth = 120;
// var newHeight = 180;

// function spawnShip(game) {
//   var X = Math.floor(Math.random() * windowWidth)
//   var Y = Math.floor(Math.random() * windowHeight)
  
//   var ship = $(document.createElement('div'))
//   ship.addClass('attacking-door')
//   ship.css({
//     top: X,
//     left: Y,
//     position: 'absolute'
//   })
//   ship.click(function() {
//   	this.remove()
//   })
  
//   game.append(ship)
  
//   setTimeout(function(){
//   	ship.addClass( "animate-me" );
//   }, 16 );
// }

// setInterval(function() {
// 	spawnShip(gameScreen)
// }, 3000)
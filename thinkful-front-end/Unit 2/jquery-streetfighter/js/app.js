//Function to play hadouken sound
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

// Page loads, Ryu standing still
$(document).ready(function() {
  // Hover over Ryu, shifts to ready pose
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  // Stop hover, goes back to still
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  //Click and hold
  .mousedown(function() {
    //play hadouken sound
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    //show hadouken
    $('.hadouken').show();
    $('.hadouken').finish().show()
    //animate hadouken to the right
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-200px');
      }
    );
  })
  //Release click, returns to ready pose
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});

//Hold "x", assumes "looking cool" pose
$(document).keydown(function(e) {
   if (e.which == 88) {
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').show();
}
})
/*// Release "x", returns to ready pose
  .keyup(function) {
    $('.ryu-cool').hide();
    $('.ryu-still').show();
});
*/

// Page loads, Ryu standing still
// Hover over Ryu, shifts to ready pose
// Stop hover, goes back to still
// Click and hold, throws a Hadouken
// Release click, returns to ready pose
// Hold "x", assumes "looking cool" pose


$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
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
  .mouseup(function() {
    //ryu goes back to ready position
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

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







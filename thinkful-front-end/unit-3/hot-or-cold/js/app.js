$(document).ready(function() {

  //Need to add check for whether user has already guessed the number when clicking guess
    //If user has guessed correctly, make feedback "You already guessed the number. Start a new game!".
      //Reset feedback on newGame

  //VARIABLES
  var randomNumber = 0;
  var guess = 0;
  var guessCount = 0;

  /*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function() {
    $(".overlay").fadeOut(1000);
  });

  //Generate random number
  function getRandomNumber() {
    randomNumber = parseInt(Math.floor(Math.random() * (100) + 1), 10);
  }

  getRandomNumber();

  //Get guess from user, validate, increment #count and add to #guessList
  $("form").submit(function(event) {
    event.preventDefault();
    guess = parseInt($("#userGuess").val(), 10);
    if (isNaN(guess)) {
      alert("Enter a number from 1 to 100");
      $("#userGuess").val("");
    } else if (guess < 1 || guess > 100) {
      alert("Enter a number from 1 to 100")
      $("#userGuess").val("");
    } else {
      compareDiff();
      guessCount++;
      setCount(guessCount);
      $("ul#guessList").append("<li>" + guess + "</li>");
      $("#userGuess").val("");
    }
  });

  //Compare randomNumber and guess
  function compareDiff() {
    if (guess / randomNumber === 1) {
      setFeedback("You're right! Good guess!");
    } else if (Math.abs(randomNumber - guess) > 50.5) {
      setFeedback("You're ice cold!");
    } else if (Math.abs(randomNumber - guess) > 30.5) {
      setFeedback("You're cold!");
    } else if (Math.abs(randomNumber - guess) > 20.5) {
      setFeedback("You're warm!");
    } else if (Math.abs(randomNumber - guess) > 10.5) {
      setFeedback("You're hot!");
    } else {
      setFeedback("You're very hot!");
    }
  }

  //Set #feedback
  function setFeedback(feedback) {
    $("#feedback").text(feedback);
  }

  //Set #count (number of guesses)
  function setCount(count) {
    $("#count").text(guessCount);
  }

  //Setup for a new game
  function newGame() {
    guessCount = 0;
    $("#count").text(guessCount);
    $("#userGuess").val("");
    $("#guessList li").remove();
    randomNumber = parseInt(Math.floor(Math.random() * (100) + 1), 10);
  }

  //Start a new game
  $(".new").click(function() {
    newGame();
  });

});
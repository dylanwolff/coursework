
$(document).ready(function(){
	
  //Need to indent code correctly

  //VARIABLES
  var randomNumber = 0;
  var guess = 0;
  var guessCount = 0;


  //Generate random number
  function getRandomNumber(){
    randomNumber = parseInt(Math.floor(Math.random()*(100)), 10);
    console.log("The random number is " + randomNumber);
  }

  getRandomNumber();

  //Get guess from user, increment #count and add to #guesslist
  $("form").submit(function(event){
    event.preventDefault();
      guess = parseInt($("#userGuess").val(), 10);
      compareDiff();
      guessCount++;
      setCount(guessCount);
      $("ul#guessList").append("<li>" + guess + "</li>");
      $("#userGuess").val("");
  });

  /*
  //Validate user input
  function validate(){
    if(isNan(guess)){
      alert("Enter a number from 1 to 100");
    } else if(guess === ""){
      alert("Enter a number from 1 to 100"); 
    } else if(guess < 0 || guess > 100){
      alert("Enter a number from 1 to 100")
    }
  }
  */

  //Gets whether the difference between randomNumber and guess is +ve or -ve
  function compareDiff(){
    if (guess - randomNumber > 0) {
      negativeDiff();
      console.log("The random number is lower than the guess");
    } else {
        positiveDiff();
        console.log("The random number is higher than the guess");
    }
  }

  //Runs when difference is positive
  function positiveDiff(){
    if (guess / randomNumber === 1) {
      setFeedback("You're right! Good guess!");
  } else if ((randomNumber - guess) > 50.5){
      setFeedback("You're ice cold!");
  }  else if ((randomNumber - guess) > 30.5){
      setFeedback("You're cold!");
  }  else if ((randomNumber - guess) > 20.5){
      setFeedback("You're warm!");
  }  else if ((randomNumber - guess) > 10.5){
      setFeedback("You're hot!");
  }  else { 
      setFeedback("You're very hot!");
     } 
  }

  //Runs when difference is negative
  function negativeDiff(){
    if (guess / randomNumber === 1) {
      setFeedback("You're right! Good guess!");
  }  else if ((guess - randomNumber) > 50.5){
      setFeedback("You're ice cold!");
  }  else if ((guess - randomNumber) > 30.5){
      setFeedback("You're cold!");
  }  else if ((guess - randomNumber) > 20.5){
      setFeedback("You're warm!");
  }  else if ((guess - randomNumber) > 10.5){
      setFeedback("You're hot!");
  }  else { 
      setFeedback("You're very hot!");
     } 
  }

  //Sets value of #feedback
  function setFeedback(feedback){
    $("#feedback").text(feedback);
  }

  //Counts guesses
  function setCount(count){
    $("#count").text(guessCount);
  }

  //Start a new game
  function newGame(){
    guessCount = 0;
    $("#count").text(guessCount);
    $("#userGuess").val("");
    $("#guessList li").remove();
    randomNumber = parseInt(Math.floor(Math.random()*(100)), 10);
    console.log("The new random number is " + randomNumber);
  }
 
  $(".new").click(function(){
    newGame();
  });

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


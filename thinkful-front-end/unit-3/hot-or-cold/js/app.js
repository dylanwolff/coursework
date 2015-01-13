
$(document).ready(function(){
	
  //Page loads, starts a new game
  //Computer randomly selects number between 1-100
    //Code to ensure input is numeric and between 1-100
    //Player guesses the number
      //Feedback "very Hot" in #feedback if the guess is 1-10 away
      //Feedback "Hot" in #feedback if the guess is close 11-20 away
      //Feedback "Warm" in #feedback if the guess is 21-30 away
      //Feedback "Cold" in #feedback if the guess is 31-50 away
      //Feedback "Ice Cold" in #feedback if the guess is 51+ away
      //Feedback in #feedback "Good guess" or similar if the guess is correct
        //Option to start a new game
      //Track number of guesses in #count
      //Add numbers guessed so far to #guesslist
    //Can start a new game by clicking "New Game" button

  //Declare variables

  var randomNumber = 0;
  var guess = 0;
  var guessCount = 0;
  var guessList = null;


  //Generate random number

  function getRandomNumber() {
    randomNumber = parseInt(Math.floor(Math.random()*(100)), 10);
  };


  //Get guess from user

  $("form").submit(function(event){
    event.preventDefault();
      guess = parseInt($('#guess').val(), 10);
  });


  //Gets whether the difference between randomNumber and guess is +ve or -ve

  function compareDiff(){
    if (guess - randomNumber) > 0 {
        negativeDiff();
    }  else {
        positiveDiff();
    }
  };


  //Runs when difference is positive

  function positiveDiff() {
    if guess / randomNumber === 1 {
      setFeedback("You're right! Good guess!");
  }  else if ((randomNumber - guess) > 50.5){
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

  function negativeDiff() {
    if guess / randomNumber === 1 {
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


  //Add guess to #guesslist


  //Increment #count




	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});


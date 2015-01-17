//.correct, .incorrect and .totalscore all start hidden
//User selects answer
  //Submit on change
  //Appropriate class in feedback shows based on whether answer is correct/incorrect
  //User clicks arrow to move to next question
//New question replaces value in .question (remove()/replace()?)
//New answers replace values in .answers ul
//When user submits response to final question (#5), .totalscore shows
  //Next arrow becomes new game link/button

$(document).ready(function() {

//VARIABLES
var currentQuestion = 0;
var numberCorrect = 0;

//Question & answer array
var questions = [{
  question: "",
  choices: [],
  qNum : 0,
  correct : 0,
  },
  {
  question: "",
  choices: [],
  qNum : 1,
  correct : 0,
  },
  {
  question: "",
  choices: [],
  qNum : 2,
  correct : 0,
  },
  {
  question: "",
  choices: [],
  qNum : 3,
  correct : 0,
  },
  {
  question: "",
  choices: [],
  qNum : 4,
  correct : 0,
  }]

//Submit answer on .answers change 
  $('input[name=answers]').change(function() {
    $('form').submit();
    event.preventDefault();
  });











});
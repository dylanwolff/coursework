$(document).ready(function() {

  //VARIABLES
  var currentQuestion = 0;
  var numberCorrect = 0;

  //Question and answer array
  var questions = [{
      question: "What is the longest commercial passenger route in the world (by distance)?",
      choices: ["Sydney, Australia (SYD) to Dallas-Fort Worth, United States (DFW)",
                "London Heathrow, United Kingdom (LHR) to Singapore (SIN)",
                "Dubai, United Arab Emirates (DXB) to Sydney, Australia (SYD)",
                "Tokyo Narita, Japan (NRT) to San Francisco, United States (SFO)",
                "Beijing, China (PEK) to Chicago, United States (ORD)"],
      qNum: 0,
      correct: 0
  },  {  
      question: "Which of the following has the largest wingspan?",
      choices: ["Airbus A340-600",
                "Boeing 747-400ER",
                "Boeing 777-200LR",
                "Boeing 787-9",
                "Boeing 767-300"],
      qNum: 1,
      correct: 2
  },  {  
      question: "During 2013, what was the world's busiest airport (by international passenger traffic)?",
      choices: ["Hong Kong International Airport (HKG), Hong Kong",
                "Dubai International Airport (DXB), United Arab Emirates",
                "Singapore Changi Airport (SIN), Singapore",
                "London Heathrow Airport (LHR), United Kingdom",
                "Amsterdam Airport Schipol (AMS), Netherlands"],
      qNum: 2,
      correct: 3
  },  {
      question: "What is the certified maximum passenger capacity for the Airbus A380-800 in a one-class configuration?",
      choices: ["585",
                "675",
                "736",
                "810",
                "853"],
      qNum: 3,
      correct: 4
  },  {
      question: "In what year did the world's first commercial flight with a paying passenger take place?",
      choices: ["1914",
                "1917",
                "1925",
                "1928",
                "1930"],
      qNum: 4,
      correct: 0
  }]

  //Setup quiz with question 0
  addQuestion();

  //Submit answer on #submit click, check answer, show appropriate feedback
  $("#submit").on("click", function() {
    submitCheck();
  });

  //On #navarrow click, remove previous question and answers, increment question number 
  //Add new question and answers, show total score after last question
  $("#navarrow i").on("click", function() {
    nextQuestion();
  });

  //After total score is displayed, next click on #navarrow resets quiz to start over 

  //Functions
  function addQuestion() {
    $("#question").append("<p>" + questions[currentQuestion].question + "</p>");
    $("#answers ul").append("<li><label><input type='radio' name='answers' value='0'>" + questions[currentQuestion].choices[0] + "</label></li>");
    $("#answers ul").append("<li><label><input type='radio' name='answers' value='1'>" + questions[currentQuestion].choices[1] + "</label></li>");
    $("#answers ul").append("<li><label><input type='radio' name='answers' value='2'>" + questions[currentQuestion].choices[2] + "</label></li>");
    $("#answers ul").append("<li><label><input type='radio' name='answers' value='3'>" + questions[currentQuestion].choices[3] + "</label></li>");
    $("#answers ul").append("<li><label><input type='radio' name='answers' value='4'>" + questions[currentQuestion].choices[4] + "</label></li>");
  }
  
  function submitCheck() {
    $('form').submit();
      var answer = $("input:radio[name='answers']:checked").val();
    if (answer == questions[currentQuestion].correct) {
      numberCorrect++;
      $("#correct").show();
      $("#incorrect").hide();
    } else {
      $("#incorrect").show();
      $("#correct").hide();
    }
  }

  function nextQuestion() {
    if (currentQuestion < 4) {
      $("p").remove("#question p");
      $("li").remove("#answers li");
      currentQuestion++;
      addQuestion();
      $("#incorrect").hide();
      $("#correct").hide();
    } else {
      $("#incorrect").hide();
      $("#correct").hide();
      $("#feedback").show().append('<p id="totalscore">You got '+numberCorrect+' out of 5 correct!</p>');
    }
  }

});

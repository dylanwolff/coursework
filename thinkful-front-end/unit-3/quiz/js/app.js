$(document).ready(function() {

  //VARIABLES
  var currentQuestion = 0;
  var numberCorrect = 0;

  //Question and answer array
  var questions = [{
      question: "What is the longest commercial passenger route in the world (by distance)?",
      choices: ["Beijing, China (PEK) to Chicago, United States (ORD)",
                "Dubai, United Arab Emirates (DXB) to Sydney, Australia (SYD)",
                "London Heathrow, United Kingdom (LHR) to Singapore (SIN)",
                "Sydney, Australia (SYD) to Dallas-Fort Worth, United States (DFW)",
                "Tokyo Narita, Japan (NRT) to San Francisco, United States (SFO)"],
      qNum: 0,
      correct: 3
  },  {  
      question: "Which of the following has the largest wingspan?",
      choices: ["Airbus A340-600",
                "Boeing 747-400ER",
                "Boeing 777-200LR",
                "Boeing 767-300",
                "Boeing 787-9"],
      qNum: 1,
      correct: 2
  },  {  
      question: "During 2013, what was the world's busiest airport (by international passenger traffic)?",
      choices: ["Amsterdam Airport Schipol (AMS), Netherlands",
                "Dubai International Airport (DXB), United Arab Emirates",
                "Hong Kong International Airport (HKG), Hong Kong",
                "London Heathrow Airport (LHR), United Kingdom",
                "Singapore Changi Airport (SIN), Singapore"],
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
  $("#submit").on("click", submitCheck);

  //On #navarrow click, remove previous question and answers, increment question number 
  //Add new question and answers, show total score after last question
  //After total score is shown, next click on #navarrow/#retry reloads page
  $(document).on("click", "#navarrow i", nextQuestion);

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
      $("#navarrow").attr("id", "retry");
      $("#retry i").click(function() {
        location.reload();
      })
    }
  }
});
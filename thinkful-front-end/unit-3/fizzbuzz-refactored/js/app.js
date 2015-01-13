var fizzbuzzer = function () {
  //Take user inputted number 
  var input = prompt("Please enter the maximum number to play FizzBuzz to");
  //Convert this to a whole number
  var x = parseInt(input);
    //Count from 1 to x
    for (i = 1 ; i < x+1; i++) {
      //if number is evenly divisible by 3 and 5, append "FizzBuzz" to #list
      if (i % 3 === 0 && i % 5 === 0) {
        $("#list").append("<li>FizzBuzz</li>");
        //If number is evenly divisible by 3, append "Fizz" to #list
      } else if (i % 3 === 0) {
        $("#list").append("<li>Fizz</li>");
        //If number is evenly divisible by 5, append "Buzz" to #list
      } else if (i % 5 === 0) {
        $("#list").append("<li>Buzz</li>");
        //If number is not evenly divisible by 3 or 5, append the number to #list
      } else {
        $("#list").append("<li>" + i + "</li>");
      }
    }
};
 
fizzbuzzer()




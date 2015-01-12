$(document).ready(function() {
  //Count from 1 to 100
  for (i = 1; i <101; i++) {
    //if evenly divisible by 3 and 5, print "fizzbuzz"
    if (i % 3 === 0 && i % 5 === 0) {
      $("#list").append("<li>FizzBuzz</li>");
      //If evenly divisible by 3, print "fizz"
    } else if (i % 3 === 0) {
      $("#list").append("<li>Fizz</li>");
      //If evenly divisible by 5, print "buzz"
    } else if (i % 5 === 0) {
      $("#list").append("<li>Buzz</li>");
      //If not evenly divisible by 3 or 5, print number
    } else {
      $("#list").append("<li>" + i + "</li>");
    }
  }
});





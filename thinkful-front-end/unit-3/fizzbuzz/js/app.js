//Count from 1 to 100
  //if divisible by 3 and 5, print "fizzbuzz"
    //if number % 3 = 0 && number % 3 = 0
    //print fizzbuzz
  //If divisible by 3, print "fizz"
    //else if number % 3 = 0
    //print fizz
  //If divisible by 5, print "buzz"
    //else if number % 5 = 0
    //print buzz
  //If not divisible by 3 or 5, print number
    //else
    //print number

  //Modulus - ie 36 % 3 = 0

for (i = 1; i <= 100; i++)
{
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}








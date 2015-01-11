//Count from 1 to 100
  //if divisible by 3 and 5, print "fizzbuzz"
    //if number % 3 = 0 && number % 3 = 0
    //print fizzbuzz
  //If divisible by 3, print "fizz"
    //elseif number % 3 = 0
    //print fizz
  //If divisible by 5, print "buzz"
    //elseif number % 5 = 0
    //print buzz
  //If not divisible by 3 or 5, print number
    //else
    //print number

  //Modulus - ie 36 % 3 = 0


for (i = 1; i < 101; i = i + 1) {
  if (x % 3 == 0 && x % 5 == 0) {
    puts "fizzbuzz"
  }
  elseif (x % 3 == 0) {
    puts "fizz"
  }
  elseif (x % 5 == 0) {
    puts "buzz"
  }
  else puts x
}
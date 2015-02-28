puts "Please enter a number between 0 and 100"
number = gets.chomp.to_i

  if number < 0 
    puts "The number #{number} is less than 0" 
  elsif number <= 50
    puts "The number #{number} is between 0 and 50"
  elsif number <= 100
    puts "The number #{number} is between 51 and 100"
  else puts "The number #{number} is greater than 100"
  end

def evaluate_number(number)
  if number < 0 
    puts "The number #{number} is less than 0" 
  elsif number <= 50
    puts "The number #{number} is between 0 and 50"
  elsif number <= 100
    puts "The number #{number} is between 51 and 100"
  else puts "The number #{number} is greater than 100"
  end
end

def evaluate_case1_number(number)
  case
  when number < 0 
    puts "The number #{number} is less than 0" 
  when number <= 50
    puts "The number #{number} is between 0 and 50"
  when number <= 100
    puts "The number #{number} is between 51 and 100"
  else puts "The number #{number} is greater than 100"
  end
end

def evaluate_case2_number(number)
  case number
  when 0..50
    puts "The number #{number} is between 0 and 50"
  when 51..100
    puts "The number #{number} is between 51 and 100"
  else 
    if number < 100 
      puts "The number #{number} is less than zero"
    else
      puts "The number #{number} is greater than 100"
    end
  end
end

puts "Please enter a number between 0 and 100"
number = gets.chomp.to_i

evaluate_number(number)
evaluate_case1_number(number)
evaluate_case2_number(number)





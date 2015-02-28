x = gets.chomp.to_i

while x >= 0
# prints x as long as it is not a negative number
  puts x
# subtracts 1 from x (counts down) and the loop continues
  x -= 1
end

puts "Done!"
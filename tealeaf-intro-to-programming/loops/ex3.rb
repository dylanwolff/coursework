numbers = [1, 2, 3, 4, 5]

numbers.each_with_index do | number, index |
  puts "#{index + 1}. #{number}"
end

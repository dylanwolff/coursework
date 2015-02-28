def countdown_to_zero(number)
 if number <= 0
  puts number
else
  puts number
  countdown_to_zero(number - 1)
end
end

countdown_to_zero(34)

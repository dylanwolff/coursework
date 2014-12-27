i = 0
loop do 
  i += 2
  if i == 4
# skips over four and continues the loop
    next 
  end
  puts "#{i}"
  if i == 10
# loop stops once i == 10
    break 
  end
end

x = 0

while x <= 10
# once the value of x reaches 7 the entire loop exits (so it only prints 1, 3, 5)
  if x == 7
    break
  elsif x.odd?
    puts x
  end
  x += 1
end

    
x = 0

while x <= 10
# if x is 3, add one and then skip to the next loop iteration (ie it won't print 3)
  if x == 3
    x += 1
    next
  elsif x.odd?
    puts x
  end
  x += 1
end

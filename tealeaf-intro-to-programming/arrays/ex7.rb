array = [1, 2, 3, 4, 5]
new_array = []

array.each do |i|
# increases each value in the first array by 2 and adds this to the new array
  new_array << i + 2
end

p array
p new_array

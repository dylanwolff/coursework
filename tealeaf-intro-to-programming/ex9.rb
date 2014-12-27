h = {a:1, b:2, c:3, d:4}

# returns value of b
puts h[:b]

# adds key/value pait e:5 to array and returns the array
h[:e] = 5
puts h

# removes key/value pairs with value of <3.5
h.delete_if do |key, value|
  value < 3.5
end
puts h
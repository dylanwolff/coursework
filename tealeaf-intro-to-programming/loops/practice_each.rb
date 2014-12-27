names = ['Bob', 'Joe', 'Steve', 'Janice', 'Susan', 'Helen']
x = 1

# iterates over each name in the array
names.each do |name|
# prepends x to each name to create a numbered list
  puts "#{x}. #{name}"
# increments the prepended number
  x += 1
end

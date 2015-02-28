# the filename will be the first argument entered
filename = ARGV.first

puts "Would you like to read #{filename}?"
puts "If you don't want that, hit CTRL-C (^C)"
puts "If you do want that, hit RETURN."

$stdin.gets

puts "Opening the file..."
target = File.open(filename)

puts "Here's your file #{filename}"
puts target.read()

puts "And finally, we close it"
target.close()
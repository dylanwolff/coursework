# the filename will be the first argument entered
filename = ARGV.first

puts "We're going to erase #{filename}"
puts "If you don't want that, hit CTRL-C (^C)."
puts "If you do want that, hit RETURN."
# reads user input
$stdin.gets

puts "Opening the file..."
# creates a new file for writing
target = open(filename, 'w')

puts "Truncating the file. Goodbye!"
# truncate empties the file
target.truncate(0)

puts "Now I'm going to ask you for three lines."

print "line 1: "
line1 = $stdin.gets.chomp
print "line 2: "
line2 = $stdin.gets.chomp
print "line 3: "
line3 = $stdin.gets.chomp

puts "I'm going to write these to the file."
# writes the above three lines to the file with each on a seperate line (\n)
target.write(line1 + "\n" + line2 + "\n" + line3)

puts "And finally, we close it."
target.close
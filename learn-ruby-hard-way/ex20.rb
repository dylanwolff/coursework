# the first variable is the input file
input_file = ARGV.first
# prints the entire contents of the (f)ile
def print_all(f)
  puts f.read
end
# f.seek(0) moves back to the start of the file (the 0 byte which is the first byte)
def rewind(f)
  f.seek(0)
end
# puts the specified line number from the specified file
def print_a_line(line_count, f)
  puts "#{line_count}, #{f.gets.chomp}"
end

current_file = open(input_file)

puts "First let's print the whole file:\n"

print_all(current_file)

puts "Now let's rewind, kind of like a tape."

rewind(current_file)

puts "Let's print three lines:"
# prints the first line
current_line = 1
print_a_line(current_line, current_file)
# prints the second line
current_line = current_line + 1
print_a_line(current_line, current_file)
# prints the third line
current_line = current_line + 1 
print_a_line(current_line, current_file)
# the first argument entered will be the filename
filename = ARGV.first
# open the file
txt = open(filename)

puts "Here's your file #{filename}:"
# Calls the .read function to print the contents of the file
print txt.read
# closes the file
txt.close()

print "Type the filename again: "
# $stdin reads user input of filename and stores this as file_again
file_again = $stdin.gets.chomp
# stores the command to open the above named file under txt_again
txt_again = open(file_again)
# prints the file referred to in file_again
print txt_again.read
# closes the file
txt_again.close()
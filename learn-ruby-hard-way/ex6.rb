# how many types of people
types_of_people = 10
# "there are 10 types of people"
x = "There are #{types_of_people} types of people."
binary = "binary"
do_not = "don't"
# those who know binary and those who don't
y = "Those who know #{binary} and those who #{do_not}."

puts x
puts y

# I said + x above
puts "I said: #{x}."
# I said + y above
puts "I also said: '#{y}'."

hilarious = false
joke_evaluation = "Isn't that joke so funny?! #{hilarious}"

puts joke_evaluation

w = "This is the left side of..."
e = "a string with the right side."
# concatenates W + e
puts w + e
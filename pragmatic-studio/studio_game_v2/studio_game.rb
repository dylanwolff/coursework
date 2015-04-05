name1 = "larry"
name2 = "curly"
name3 = "moe"
name4 = "shemp"

health1 = 60
health2 = 125
health3 = 100
health4 = 90

current_time = Time.new
formatted_time = current_time.strftime("%A %m/%d/%Y at %I:%M%p")

puts "The game started on #{formatted_time}"

puts "#{name1.capitalize}'s health is #{health1}."
puts "#{name2.upcase}'s health is #{health2}."
puts "#{name3.capitalize} has a health of #{health3}.".center(50, '*')
puts "#{name4.capitalize.ljust(30, '.')} #{health4} health"

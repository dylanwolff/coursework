project1 = "Project ABC"
project2 = "Project LMN"
project3 = "Project XYZ"

funding1 = 1000
funding2 = 0
funding3 = 0

puts "#{project1} has $#{funding1} in funding."
puts "#{project2} has $#{funding2} in funding."
puts "#{project3} has $#{funding3} in funding."

puts "Projects:\n\t#{project1}\n\t#{project2}\n\t#{project3}"

current_time = Time.new
formatted_time = current_time.strftime("%A %m/%d/%Y at %I:%M%p")
puts "Funding amounts as of #{formatted_time}."

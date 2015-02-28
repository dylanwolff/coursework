# Number of cars
cars = 100
# Spaces in a car
space_in_a_car = 4.0
# Number of drivers
drivers = 30
# Number of passengers
passengers = 90
# Number of cars less number of drivers
cars_not_driven = cars - drivers
# Cars driven is equal to the number of drivers
cars_driven = drivers
# Capacity is number of cars * spaces in a car
carpool_capacity = cars_driven * space_in_a_car
# Avg pax per car is pax / number of cars driver
average_passengers_per_car = passengers / cars_driven

# Puts the number of cars available
puts "There are #{cars} cars available."
# Puts the number of drivers available
puts "There are only #{drivers} drivers available."
# Puts the number of cars without drivers
puts "There will be #{cars_not_driven} empty cars today."
# Puts the carpool capacity
puts "We can transport #{carpool_capacity} people today."
# Puts the total number of pax
puts "We have #{passengers} to carpool today."
# Puts the average number of pax per car
puts "We need to put about #{average_passengers_per_car} in each car."
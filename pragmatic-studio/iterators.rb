numbers = (1..10).to_a
puts numbers.select { |n| n.even? }

def my_select(array)
  results = []
  array.each do |element|
    results << element if yield(element)
  end
  results
end

puts my_select(numbers) { |n| n.even? }
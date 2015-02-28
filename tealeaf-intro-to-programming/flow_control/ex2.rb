def greeting(string)
  if string.length > 10
    string.upcase
  else
    string
  end
end

puts greeting ("Hi there and welcome")
puts greeting ("Hello")

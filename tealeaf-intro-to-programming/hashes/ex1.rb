family = {  uncles: ["bob", "joe", "steve"],
            sisters: ["jane", "jill", "beth"],
            brothers: ["frank","rob","david"],
            aunts: ["mary","sally","susan"]
          }
# selects immediate family members
immediate_family = family.select do |key, value|
  k == :sisters || k == :brothers
end
# "flattens" these values into a new array
new_array = immediate_family.values.flatten

p new_array

from_file, to_file = ARGV

puts "Copying from #{from_file} to #{to_file}"

# we could do these two on one line, how?
# in_file = open(from_file)
# indata = in_file.read

in_file = open(from_file)
indata = in_file.read

out_file = open(to_file, 'w')
out_file.write(indata)

puts "Alright, all done."

out_file.close
in_file.close
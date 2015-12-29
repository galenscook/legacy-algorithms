# Prep string
  # split string

# column_count
  #Find length of array
  # return square root of length rounded up 

# row_count
  # length of array
  # return squar roote rounded down

# arrange grid
  # Use each_slice with the number given in column count
  # return array of row arrays

# Buffer grid
  #if the last row doesn't have the same number of elements as the others, insert empty strings

# encrypt
  # .transpose

# print_grid
  #join rows
  #join grid with spaces

def column_count(string)
  Math.sqrt(string.length).ceil
end

def row_count(string)
  Math.sqrt(string.length).floor
end

def arrange_grid(string)
  string.split('').each_slice(column_count(string)).to_a
end

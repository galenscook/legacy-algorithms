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

def buffer_grid(grid, element_length)
  until grid.last.length == element_length
    grid.last.push('')
  end
  grid
end

def encrypt(string)
  grid = arrange_grid(string)
  columns = column_count(string)
  encrypted = buffer_grid(grid, columns).transpose
  print_grid(encrypted)
end

def print_grid(grid)
  grid.map! do |row|
    row.join('')
  end
  grid.join(' ')
end


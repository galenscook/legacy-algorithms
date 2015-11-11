# largestPalindrome
  #Set max to 0
  # Set outer_factor to 999
  #while outer factor > 900
    # set inner to outer
    # while inner > 900
      # If the product is a palindrome and bigger than max, replace max
      # decrement inner
    # decrement outer
  # return max
  

# isPalindrome? --> 
  # recursive solution
    # split digits into an array
    # Base Case
      # if the length of array is 0 or 1
        # return true
      # else
        # Compare the first and the last elements
          # if the same, remove both and call method again
          # else --> return false
  # iterative solution -- faster
    # set variable equal to the reversed string
    # Compare the original and reversed

def largest_palindrome
  max = 0
  outer_factor = 999
  while outer_factor >= 900
    inner_factor = outer_factor
    while inner_factor >= 900
      inner_factor == outer_factor
      product = inner_factor * outer_factor
      if is_palindrome?(product) && product > max
        max = product
      end
      inner_factor -= 1
    end
    outer_factor -= 1
  end
  return max
end

def is_palindrome?(input)
  reversed = input.to_s.split('').reverse.join('')
  input.to_s == reversed
end


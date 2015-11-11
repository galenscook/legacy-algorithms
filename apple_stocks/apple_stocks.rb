# // Find initial_max of whole array
#   // If this value is duplicated, find furthest right instance of this value
#   // Find the min of all of the values between the start of the array and the initial_max
#     // Find the difference between the initial max and the min
#     // Record these values in a current_best object

# // Use initial max as left limit
#   // Find max of array from left limit to end of day
#     // If this value is duplicated, find furthest right instance of this value
#     // Find the min of all of the values between the start of the array and the max
#       // Find the difference between the max and the min
#       // Compare this difference to the one currently stored in current_best
#         // If better, replace

# // Keep repeating until initial max == array.length-1


# // left limit
# // max
# // min

sample = [2, 2, 3, 5, 2, 1, 3, 4, 2, 2, 2, 1, 0]
sample_2 = [12, 7, 6, 4, 1]

# max_index = sample.index(sample.max)

# min_index = sample.index(sample[0..max_index].min)

# difference = sample[max_index] - sample[min_index]

# current_best = {max: max_index, min: min_index, difference: difference}


def stock_prices_yesterday(sample)
  left_limit = 0
  right_limit = sample.index(sample.max)
  current_best = {difference: 0}
  
  while right_limit != sample.length-1
    max_index = right_limit

    min_index = nil
    sample.each_with_index do |num, index|
      if index > left_limit
        if num == sample[left_limit..max_index].min
          min_index = index
          break
        end
      end
    end

    difference = sample[max_index] - sample[min_index]
    if difference > current_best[:difference]
      current_best = {sell: max_index, buy: min_index, difference: difference}
    end

    left_limit = max_index

    sample.each_with_index do |num, index|
      if index >= left_limit
        if num == sample[left_limit+1..-1].max
          right_limit = index
        end
      end
    end

  end
  return current_best
end




p stock_prices_yesterday(sample)
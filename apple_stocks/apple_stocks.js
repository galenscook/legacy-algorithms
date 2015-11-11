// Find initial_max of whole array
  // If this value is duplicated, find furthest right instance of this value
  // Find the min of all of the values between the start of the array and the initial_max
    // Find the difference between the initial max and the min
    // Record these values in a current_best object

// Use initial max as left limit
  // Find max of array from left limit to end of day
    // If this value is duplicated, find furthest right instance of this value
    // Find the min of all of the values between the start of the array and the max
      // Find the difference between the max and the min
      // Compare this difference to the one currently stored in current_best
        // If better, replace

// Keep repeating until initial max == array.length-1


// left limit
// max
// min

var sample = [2, 2, 3, 5, 2, 1, 3, 4, 2, 2, 2, 1, 0]

var maxIndex = sample.indexOf(Math.max.apply(null, sample))

var minIndex = sample.indexOf(Math.min.apply(null, sample[0..maxIndex]))
  // --> THIS DOESN'T WORK.  use for loop
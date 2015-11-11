// largestPalindrome
  //Set max to 0
    // Loop through three digit numbers in a descending order
      // Loop through three digit numbers again, starting with the current number
        // If the product is a palindrome and bigger than max, replace max

// isPalindrome? --> 
  // recursive solution
    // split digits into an array
    // Base Case
      // if the length of array is 0 or 1
        // return true
      // else
        // Compare the first and the last elements
          // if the same, remove both and call method again
          // else --> return false
  // iterative solution
    // set variable equal to the reversed string
    // Compare the original and reversed

function largestPalindrome(){
  var max = 0
  for (var i = 999; i >= 900; i--) {
    for (var j = i; j >= 900; j--) {
      var product = j * i;
      if(isPalindrome(product) && product > max){
        max = product;
      }
    };
  };
  return max;
}

function isPalindrome(value){
  var reversed = value.toString().split('').reverse().join('');
  return value.toString() === reversed;
}

console.log(largestPalindrome());
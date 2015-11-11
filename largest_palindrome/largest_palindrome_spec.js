describe("isPalindrome", function() {
  it('returns true if input is a palindrome', function(){
    expect(isPalindrome(1001)).toBe(true);
  });

  it('returns false if input is not a palindrome', function(){
    expect(isPalindrome(988888)).toBe(false);
  });

});

describe('largestPalindrome', function(){
  it('returns the largest palindrome that is the product of two three digit numbers', function(){
    expect(largestPalindrome()).toBe(906609)
  })

});


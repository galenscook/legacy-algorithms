describe('factors', function(){
  it('returns an object', function(){
    expect(typeof factors(20)).toBe('object');
  });

  it('returns the factors of 1', function(){
    expect(factors(1)).toEqual([1])
  });

  it('returns the factors of a prime number, not including the number', function(){
    expect(factors(13)).toEqual([1])
  });

  it('returns the factors of a two digit number', function(){
    expect(factors(40)).toEqual([1, 2, 4, 5, 8, 10, 20])
  });

  it('returns the factors of a three-digit number', function(){
    expect(factors(255)).toEqual([1, 3, 5, 15, 17, 51, 85])
  })
});

describe('sumOfFactors', function(){
  it('returns a number', function(){
    expect(typeof sumOfFactors(1)).toBe('number')
  });

  it('returns 1 for prime numbers', function(){
    expect(sumOfFactors(19)).toEqual(1);
  });

  it('returns the sum of factors for two digit number', function(){
    expect(sumOfFactors(40)).toEqual(50);
  });

  it('returns the sum of factors for three digit numbers', function(){
    expect(sumOfFactors(255)).toEqual(177);
  })
})

describe('amicablePair', function(){
  it('returns true for amicable pairs', function(){
    expect(amicablePair(220)).toBe(true)
  });

  it('returns true for amicable pairs', function(){
    expect(amicablePair(284)).toBe(true)
  });

  it('returns false if a number does not have an amicable pair', function(){
    expect(amicablePair(255)).toBe(false)
  });

  it('returns false if a number does not have an amicable pair', function(){
    expect(amicablePair(19)).toBe(false)
  });
});

describe('addNums', function(){
  it('returns the sum of numbers in an array', function(){
    expect(addNums([1, 1, 1])).toEqual(3)
  });
});

describe('removeDuplicates', function(){
  it('returns an array of 1 unique value', function(){
    expect(removeDuplicates([1, 1, 1])).toEqual([1]);
  });

  it('returns an array of unique values', function(){
    expect(removeDuplicates([1, 2, 2])).toEqual([1, 2]);
  });
});

describe('amicablePairsSum', function(){
  it('returns the sum of amicable pairs under 10,000', function(){
    expect(amicablePairsSum()).toEqual(31626);
  })
})
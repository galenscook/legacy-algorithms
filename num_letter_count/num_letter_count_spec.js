describe('digitCounter', function(){
  it('returns the correct number of digits for a one-digit number', function(){
    expect(digitCounter(1)).toBe(1);
  });
  it('returns the correct number of digits for a two-digit number', function(){
    expect(digitCounter(10)).toBe(2);
  });
  it('returns the correct number of digits for a three-digit number', function(){
    expect(digitCounter(983)).toBe(3);
  });
  it('returns the correct number of digits for a four-digit number', function(){
    expect(digitCounter(1000)).toBe(4);
  });
});

describe('characterCounter', function(){
  it('returns the correct number of characters for a single digit', function(){
    expect(characterCounter(1)).toBe(3)
  });

  it('returns the correct number of characters for teens', function(){
    expect(characterCounter(12)).toBe(6)
  });

  it('returns the correct number of characters for two-digits', function(){
    expect(characterCounter(21)).toBe(9)
  });

  it('returns the correct number of characters for three-digits with teen', function(){
    expect(characterCounter(212)).toBe(19)
  });

  it('returns the correct number of characters for three-digits without teen', function(){
    expect(characterCounter(342)).toBe(23)
  });

  it('returns the correct number of characters for 1000', function(){
    expect(characterCounter(1000)).toBe(11)
  });

});

describe('countAllCharacters', function(){
  it('returns the cortrect number of characters 1-1000', function(){
    expect(countAllCharacters()).toBe(21124)
  });
})

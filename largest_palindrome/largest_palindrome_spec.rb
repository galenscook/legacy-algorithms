require_relative ('largest_palindrome')


describe '#is_palindrome?' do
  it('returns true for palindromes') do
    expect(is_palindrome?(101)).to be true
  end

  it('returns false for non-palindromes') do
    expect(is_palindrome?(900)).to be false
  end
end

describe '#largest_palindrome' do
  it('returns 906609') do
    expect(largest_palindrome).to eq(906609)
  end
end

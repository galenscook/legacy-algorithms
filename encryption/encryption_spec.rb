require_relative ('encryption')


describe('encryption') do

  let(:string) {'haveaniceday'}

  describe('#column_count') do
    it('finds the correct number of columns for grid') do
      expect(column_count(string)).to eq(4)
    end
  end

  describe('#row_count') do
    it('finds the correct number of rows for grid') do
      expect(row_count(string)).to eq(3)
    end
  end

  describe('#arrange_grid') do
    it('creates an array of row_count elements') do
      expect(arrange_grid(string).length).to eq(3)
    end
  end
end
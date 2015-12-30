require_relative ('encryption')


describe('encryption') do

  let(:string) {'haveaniceday'}
  let(:string2) {'feedthedog'}

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

    it('creates subarrays of column_count length') do
      expect(arrange_grid(string).first.length).to eq(4)
    end
  end

  describe('#buffer_grid') do
    it('inserts empty strings to last element to make grid even') do
      grid = arrange_grid(string2)
      columns = column_count(string2)
      expect(buffer_grid(grid, columns).last).to eq(['o', 'g', '', ''])
    end
  end

  describe('#print_grid') do
    before(:each) do
      @grid = arrange_grid(string)
    end
    
    it('outputs a string') do
      expect(print_grid(@grid)).to be_a(String)
    end

    it('correctly spaces between rows and columns') do
      expect(print_grid(@grid)).to eq('have anic eday')
    end
  end

  describe('#encrypt') do
    it('outputs a string') do
      expect(encrypt(string)).to be_a(String)
    end

    it('correctly handles problem input and output') do
      expect(encrypt(string)).to eq('hae and via ecy')
    end
  end
end
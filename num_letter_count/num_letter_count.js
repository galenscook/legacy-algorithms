// Set reference object with ones and tens digits 
// characterCounter
  // set words variable as empty string
  // if number has four digits
    // push "onethousand" into words variable
  // else if num has three digits
    // push the values aligned to the digits from the reference object
  // else if num has two digits
    // push the values aligned to the digits from the reference object
  // else
    // push the values aligned to the digits from the reference object
  // Return the length of the words variable


// countAllCharacters
  // set a total variable equal to zero
  // for each number 1 .. 1000, add characterCounter to total variable
  // return total variable

var digitCharacters = {
  ones: {
    "0": '',
    "1": 'one',
    "2": 'two',
    "3": 'three',
    "4": 'four',
    "5": 'five',
    "6": 'six',
    "7": 'seven',
    "8": 'eight',
    "9": 'nine'
  },
  tens: {
    "0": '',
    "1": '',
    "2": 'twenty',
    "3": 'thirty',
    "4": 'forty',
    "5": 'fifty',
    "6": 'sixty',
    "7": 'seventy',
    "8": 'eighty',
    "9": 'ninety'
  },
  teens: {
    "0": 'ten',
    "1": 'eleven',
    "2": 'twelve',
    "3": 'thirteen',
    "4": 'fourteen',
    "5": 'fifteen',
    "6": 'sixteen',
    "7": 'seventeen',
    "8": 'eighteen',
    "9": 'nineteen'
  }
};


function digitCounter(num){
  return num.toString().split('').length
}

function characterCounter(num){
  var words = '';
  var length = digitCounter(num);
  var num = num.toString();

  if (length === 4){
    words += 'onethousand';
    return words.length
  }

  if (length === 3) {
    words += digitCharacters.ones[num[0]] + 'hundredand';
    num = num.substring(num.length-2);
  }

  if (length >= 2) {
    words += digitCharacters.tens[num[0]];
    if (num[0] === '1'){
      words += digitCharacters.teens[num[1]];
      return words.length;
    }
    num = num.substring(num.length-1);
  }

  if (length >= 1){
    words += digitCharacters.ones[num[0]];
  } 

  return words.length

};

function countAllCharacters(){
  var totalDigits = 0;
  for(i=1; i <= 1000; i++){
    totalDigits += characterCounter(i);
    console.log(i +': ' + totalDigits)
  }
  return totalDigits;
}

console.log(countAllCharacters())

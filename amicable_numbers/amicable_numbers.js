// factors(num)
// sumOfFactors(num)
// amicablePair(num)

function factors(num){
  var factors = [1];
  for (i = 2; i < num; i++){
    if(num % i === 0){
      factors.push(i)
    }
  }
  return factors
};

function addNums(array){
  var sum = array.reduce(function(previousValue, currentValue){
    return previousValue + currentValue
  });
  return sum
}

function sumOfFactors(num){
  var sum = addNums(factors(num))

  return sum
};

function amicablePair(num){
  var sum = sumOfFactors(num)
  if(sum === num){
    return false
  }
  return sumOfFactors(sum) === num
};

function amicablePairsSum(){
  var amicables = []
  for(var i = 1; i < 10000; i++){
    if(amicables.indexOf(i) === -1){
      if(amicablePair(i)){
        amicables.push(i, sumOfFactors(i))
      };
    };
  };
  var uniqueAmicables = removeDuplicates(amicables);
  console.log(uniqueAmicables)
  return addNums(uniqueAmicables)
};

function removeDuplicates(array){
  var cleanArray = []
  for(var i=0; i <= array.length - 1; i++){
    if(cleanArray.indexOf(array[i]) === -1){
      cleanArray.push(array[i])
    }
  }
  return cleanArray
}

console.log(amicablePairsSum())
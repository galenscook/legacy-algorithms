function twoSum(nums, target){
  var answers = []
  for (var i = 0; i < nums.length; i++) {
    for (var j = i+1; j < nums.length; j++){
      if(nums[i]+nums[j] === target){
        answers.push(i+1, j+1)
      }
    }
  };
  return answers
}
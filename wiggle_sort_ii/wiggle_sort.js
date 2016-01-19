/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var wiggleSort = function(nums) {
  nums.sort();
  var totalLength = nums.length
  var middle = Math.ceil(nums.length / 2);
  var lowerHalf = nums.splice(0,middle);
  var upperHalf = nums
  nums = new Array(totalLength)

  for(var i = 0; i < nums.length; i++){
    if(i === 0 || i % 2 === 0){
      nums[i] = lowerHalf[0];
      lowerHalf.shift();
    } else {
      nums[i] = upperHalf[0];
      upperHalf.shift()
    }
  }
};
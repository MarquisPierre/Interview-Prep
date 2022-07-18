


var twoSum = function(nums, target) {

  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (diff in map) {
        return [map[diff], i];
    } else {
        map[nums[i]] = i;
    }
    console.log(map);
  }
           
  
};


let nums = [2,7,11,15]
let target = 9 

console.log(twoSum(nums, target))

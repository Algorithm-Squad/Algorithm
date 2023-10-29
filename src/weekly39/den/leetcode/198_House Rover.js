const rob = function (nums) {
  let maxTwo = 0;
  let maxOne = 0;

  for (let i = 0; i < nums.length; i++) {
    let maxCurrent = Math.max(nums[i] + maxTwo, maxOne);
    maxTwo = maxOne;
    maxOne = maxCurrent;
  }

  return maxOne;
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12

const lengthOfLIS = function (nums) {
  if (nums.length == 1) return 1;

  const arr = [nums[0]];

  for (let i = 0; i < nums.length; i++) {
    if (arr.at(-1) < nums[i]) {
      arr.push(nums[i]);
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] >= nums[i]) {
          arr[j] = nums[i];
          break;
        }
      }
    }
  }
  return arr.length;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1

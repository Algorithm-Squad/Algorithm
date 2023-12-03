// 제한조건: You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};

console.log(singleNumber([2, 2, 3, 2])); // 3
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // 99

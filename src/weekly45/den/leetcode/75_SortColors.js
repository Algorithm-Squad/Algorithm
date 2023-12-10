/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = function (nums) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let tmp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = tmp;
        sorted = false;
      }
    }
  }
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // [0,1,2]

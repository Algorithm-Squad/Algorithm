/**
  Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let point = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[point] = nums[i];
      nums[i] = i === point ? nums[i] : 0;
      point++;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12]); // [1,3,12,0,0]
moveZeroes([0]); // [0]

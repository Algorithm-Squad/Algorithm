function sortColors(nums: number[]): void {
  let [red, white, blue] = [0, 0, 0];

  for (const num of nums) {
    if (num === 0) {
      red += 1;
    } else if (num === 1) {
      white += 1;
    } else {
      blue += 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < red) {
      nums[i] = 0;
    } else if (i < red + white) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
}

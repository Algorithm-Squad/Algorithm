function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((cur, acc) => (cur += acc), 0);
  const target = sum / 2;
  if (!Number.isInteger(target)) return false;

  const arr = new Array(target).fill(false);
  arr[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      if (arr[j - nums[i]] === true) {
        if (j === target) return true;
        arr[j] = true;
      }
    }
  }
  return false;
}

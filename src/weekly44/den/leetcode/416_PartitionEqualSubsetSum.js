const canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);

  if (sum % 2 !== 0) return false;

  const half = sum / 2;

  return nums
    .sort((a, b) => b - a)
    .some((num, i) => {
      if (num === half) return true;
      if (num > half) return false;
      return nums.slice(i + 1).some((n) => n + num === half);
    });
};

console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false
console.log(canPartition([1, 2, 3, 4, 5, 6, 7])); // true
// 75 test cass failed

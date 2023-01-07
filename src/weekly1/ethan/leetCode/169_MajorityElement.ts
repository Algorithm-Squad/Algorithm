function majorityElement(nums: number[]): number {
  const map = new Map();
  for (const num of nums) {
    map.get(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }

  for (const [key, value] of map) {
    if (value > nums.length / 2) return key;
  }
  return -1;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

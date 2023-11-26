const majorityElement = function (nums) {
  const countMap = new Map();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  const majorityThreshold = Math.floor(nums.length / 3);
  const majorityElements = [];

  for (const [num, count] of countMap) {
    if (count > majorityThreshold) {
      majorityElements.push(num);
    }
  }

  return majorityElements;
};

console.log(majorityElement([3, 2, 3])); // [3]
console.log(majorityElement([1])); // [1]
console.log(majorityElement([1, 2])); // [1, 2]

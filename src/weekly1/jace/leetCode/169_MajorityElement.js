/*
p169: Majority Element

• 숫자 요소로 이루어진 배열과 그 크기(길이)는 n
• Majority Element란 배열의 요소들 중 배열의 길이 n / 2보다 동일한 요소가 반복적으로 존재하는 요소
• Majority Element는 배열에 항상 존재한다고 가정할 것
• Majority Element를 반환하라 
*/

// const nums = [3, 2, 3];
const nums = [2, 2, 1, 1, 1, 2, 2];

const majorityElement = (nums) => {
  nums.sort(compareFunc);
  return nums[Math.floor(nums.length / 2)];
};

const compareFunc = (a, b) => a - b;

console.log(majorityElement(nums));

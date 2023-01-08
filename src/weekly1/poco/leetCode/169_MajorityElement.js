// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

const majorityElement = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const result = sortedNums[Math.floor(nums.length / 2)];
  return result;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// 숫자로 이루어진 길이 n의 배열에서 가장 많은 갯수의 요소를 return하라
// 가장 많은 갯수를 가진 요소는 배열의 길이의 절반 (2/n) 보다 더 많은 갯수를 갖는다

// 배열안에서 원하는 결과값은 과반수의 갯수를 가지고 있음.
// 즉, 오름차순 혹은 내림차순으로 정렬했을때, 배열의 중간인덱스의 값은 과반수가 넘는 요소

// sort 매서드 정렬 시간복잡도 O(nlogn)
// https://d2.naver.com/helloworld/0315536
// 배열의 인덱스로 접근 O(1)
// 즉, 시간복잡도 O(nlogn)

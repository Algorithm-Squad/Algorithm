/**
 * 시작시간: 15:40
 * 종료시간: 16:30
 * 문제출처: https://leetcode.com/problems/top-k-frequent-elements/
 * Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = function (nums, k) {
  const answers = [];
  const numbers = {};

  nums.forEach((num) => (numbers[num] = numbers[num] + 1 || 1));

  const numsFrequentInfo = Object.entries(numbers).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    answers.push(numsFrequentInfo[i][0]);
  }

  return answers;
};

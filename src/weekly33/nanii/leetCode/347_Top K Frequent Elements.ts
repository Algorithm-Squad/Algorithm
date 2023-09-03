/**
 * 347. Top K Frequent Elements / Medium
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param nums
 * @param k
 */
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  nums.forEach((num) => {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
  });

  const sorted = [...map.entries()].sort((prev, next) => next[1] - prev[1]);
  return sorted.slice(0, k).map((num) => num[0]);
};
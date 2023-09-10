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

  // 주어진 배열의 숫자들을 Key로 횟수를 value로 하는 Map을 만들고, value를 기준으로 내림차순 정렬
  const sorted = [...map.entries()].sort((prev, next) => next[1] - prev[1]);
  return sorted.slice(0, k).map((num) => num[0]);
};
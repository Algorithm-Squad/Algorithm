/**
 * 137. Single Number II / Medium
 * https://leetcode.com/problems/single-number-ii/
 * @param nums 하나의 요소를 빼고 모든 요소가 3번씩 나오는 배열에서, 1번만 나오는 요소 반환
 * 조건 1. O(n) time complexity 시간복잡도
 * 조건 2. O(1) space complexity 공간복잡도
 */
function singleNumber(nums: number[]): number {
  const map = new Map();
  nums.forEach((n) => {
    map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1);
  });
  for (const [key, value] of map) {
    if (value === 1) return key;
  }
}

// ?? 공간복잡도 O(1) 로 풀이하는 방법..

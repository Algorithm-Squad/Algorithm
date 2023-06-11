/**
 * 1512. Number of Good Pairs / Easy
 * https://leetcode.com/problems/number-of-good-pairs/
 * @param nums 인덱스쌍의 값이 같은 경우의 수
 */
function numIdenticalPairs(nums: number[]): number {
  let answer = 0;
  const map = new Map<number, number>();
  for (const num of nums) {
    if (map.has(num)) {
      answer += map.get(num);
      map.set(num, map.get(num) + 1);
    } else map.set(num, 1);
  }
  return answer;
}

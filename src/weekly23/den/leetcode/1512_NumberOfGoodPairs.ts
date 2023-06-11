/**
 * 문제 출처: https://leetcode.com/problems/number-of-good-pairs/
 * 
 * 시작시간: 17:15
 * 종료시간: 17:45
 */

function numIdenticalPairs(nums: number[]): number {
  const goodPairsMap: Map<number, number> = new Map();
  let count = 0;

  nums.forEach((num) => {
    if (goodPairsMap.has(num)) {
      count += goodPairsMap.get(num)!;
      goodPairsMap.set(num, goodPairsMap.get(num)! + 1);
    } else {
      goodPairsMap.set(num, 1);
    }
  });

  return count;
}
console.log(numIdenticalPairs([1,2,3,1,1,3])); // 4
console.log(numIdenticalPairs([1,1,1,1])); // 6
console.log(numIdenticalPairs([1,2,3])); // 0
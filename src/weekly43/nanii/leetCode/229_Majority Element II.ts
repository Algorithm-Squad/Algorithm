/**
 * 229. Majority Element II / Medium
 * https://leetcode.com/problems/majority-element-ii/
 * @param nums  n 배열에서 n/3 보다 많이 등장하는 모든 요소를 리턴하라.
 */
function majorityElement(nums: number[]): number[] {
  const size = nums.length;
  const count = Math.floor(size / 3);

  const map = new Map();

  nums.forEach((num) => {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  });

  return [...map].reduce((acc, [key, value]) => {
    if (value > count) {
      acc.push(key);
    }
    return acc;
  }, []);
}

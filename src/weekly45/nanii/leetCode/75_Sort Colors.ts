/**
 * 75. Sort Colors / Medium
 * https://leetcode.com/problems/sort-colors/
 * @param nums 0, 1, 2로 이루어진 배열 (0, 1, 2는 각각 red, white, blue를 의미)
 * @returns sort 메서드를 사용하지않고 nums를 정렬 (같은 색끼리 인접하도록, 0->1->2
 * In-place algorithm 제자리알고리즘 : 추가메모리없이 배열을 정렬해야됨
 */
function sortColors(nums: number[]): void {
  const map = new Map();
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  let n = 0;
  for (let i = 0; i <= map.size; i++) {
    for (let j = 0; j < map.get(i); j++) {
      nums[n++] = i;
    }
  }
}

/**
 * 704. Binary Search
 * https://leetcode.com/problems/binary-search/
 * @param nums 숫자 배열
 * @param target 찾고자 하는 값
 * @returns 찾고자 하는 값의 인덱스
 */
function search(nums: number[], target: number): number {
  return nums.findIndex((number) => number === target);
}

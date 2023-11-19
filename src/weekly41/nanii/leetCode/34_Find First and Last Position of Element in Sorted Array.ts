/**
 * 34. Find First and Last Position of Element in Sorted Array / Medium
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param nums 증가하는 정수배열
 * @param target 타겟값의 첫번째인덱스 findIndex, 마지막인덱스 findLastIndex를 찾아서 리턴 (없으면 -1), O(log n)으로 구현
 */
function searchRange(nums: number[], target: number): number[] {
  // 앞에서 순회하고, 뒤에서 순회하면 안됨??
  const result = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result[0] = i;
      break;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      result[1] = i;
      break;
    }
  }

  return result;
}

//* 아주 이지한 방법 (findIndex가 indexOf보다 빠름)
// function searchRange(nums: number[], target: number): number[] {
//   const firstIndex = nums.indexOf(target);
//   const lastIndex = nums.lastIndexOf(target);
//   return [firstIndex, lastIndex];

// findLastIndex가 최신 문법이라 사용할 수 없음..
// function searchRange(nums: number[], target: number): number[] {
//   const firstIndex = nums.findIndex((n) => n === target);
//   const lastIndex = nums.findLastIndex((n) => n === target);
//   return [firstIndex, lastIndex];
// }
// */

/**
 * 540. Single Element in a Sorted Array / Medium
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 * @param nums 정렬된 배열
 * @returns 배열에서 한 번만 나타나는 원소
 */
function singleNonDuplicate(nums: number[]): number {
  //** 방법 1
  // 중간 요소와 오른쪽 요소가 홀수면, 왼쪽에 하나의 요소가 있고 그렇지 않으면 오른쪽에 있음
  // 배열의 크기가 1이 될때까지 탐색
  // 배열의 크기가 1이 되면, 그 요소를 반환

  //!! 방법 2 (정렬된 배열이기때문에,, 같은 값이 연속되어 나타남)
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
}

/**
 * 직관적으로 풀이했을 때....
function singleNonDuplicate(nums: number[]): number {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      map.delete(num);
    } else {
      map.set(num, 1);
    }
  }
  return [...map.keys()][0];
}
*/

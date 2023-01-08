/**
 * 35. Search insert position
 *
 * 시간복잡도 : O(n) ..? [Runtime 54 ms] [Beats 98.2%]
 * 공간복잡도 : [Memory 42.1 MB] [Beats 66.40%]
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while(start <= end) {
    const mid = start + Math.floor((end - start)/ 2);
    if(nums[mid] === target) return mid;
    if(nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

/**
 * 이진탐색 : 배열의 중간값과 비교하여 검색값을 찾음
 * 대상 : 정렬된 배열
 * 1. 중간값과 검색값이 같으면 종료
 * 2. 중간값보다 검색값이 크다면 중간값 기준 배열 오른쪽 탐색
 * 3. 중간값보다 검색값이 작다면 중간값 기준 배열 왼쪽 탐색
 * 값을 찾거나 간격이 비어있을 때까지 반복
 *
 * 고민과정 : 이진탐색을 해야할지...머리가 생각하는대로 빨리 짜버릴까 많이 고민했습니다
 * 이렇게 정렬된 배열은 반으로 쪼개서 찾아가야 시간복잡도가 좋다고 하니
 * 반으로 쪼개서.. 범위를 줄이고 줄이고 줄이고 줄이기 위해 while문을 사용

var searchInsert2 = function(nums, target) {
  let result = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < target) {
      result = i;
      if(i === nums.length-1) {
        return i+1;
      }
    } else if(nums[i] = target || nums[i] > target) {
      return result = i;
    }
  }
  return result;
};
 */

console.log(searchInsert(nums, target));
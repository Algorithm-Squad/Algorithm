/**
 * 문제 출처: https://leetcode.com/problems/binary-search/description/
 * 
 * 시작 시간: 18:00
 * 종료 시간: 18:20
 */


function search(nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (nums[mid] < target) {
      start = mid + 1
    } else if (nums[mid] > target) {
      end = mid - 1
    } else return mid
  }
  return -1
}
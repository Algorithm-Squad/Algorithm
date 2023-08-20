/**
 * 문제출처: https://leetcode.com/problems/kth-largest-element-in-an-array/
 * 시작시간: 14:40
 * 종료시간: 15:00
 * 결과: test case 통과 실패(37/40)
 */

// function findKthLargest(nums: number[], k: number): number {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] < nums[j]) {
//         const temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//       }
//     }
//   }
//   return nums[k - 1];
// }

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4

/**
 * 두 번째 풀이: 성공
 */

function findKthLargest(nums, k) {
  if (nums.length === 1) {
    return nums[nums.length - 1];
  }
  const sortedNums = quickSort(nums, 0, nums.length - 1);
  return sortedNums[sortedNums.length - k];
}

function quickSort(nums, leftIndex, rightIndex) {
  if (leftIndex >= rightIndex) {
    return;
  }

  const mid = Math.floor((leftIndex + rightIndex) / 2);
  const pivot = nums[mid];

  const partitionIndex = divide(nums, leftIndex, rightIndex, pivot);

  quickSort(nums, leftIndex, partitionIndex - 1);
  quickSort(nums, partitionIndex, rightIndex);

  return nums;
}

function divide(nums, left, right, pivot) {
  while (left <= right) {
    while (nums[left] < pivot) {
      left++;
    }

    while (nums[right] > pivot) {
      right--;
    }

    if (left <= right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;

      left++;
      right--;
    }
  }

  return left;
}

console.log(findKthLargest([1], 1));
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4

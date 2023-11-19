// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      let start = mid;
      let end = mid;

      while (nums[start] === target) {
        start--;
      }

      while (nums[end] === target) {
        end++;
      }

      return [start + 1, end - 1];
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([1, 4], 4));
console.log(searchRange([3, 3, 3], 3));

// 매개변수
// nums: 정수를 요소로 갖는 배열
// target: 정수

// 출력
// nums 배열에서 target의 시작 인덱스와 끝 인덱스를 배열로 반환

// 문제 설명 및 해결
// 매개변수로 주어진 nums 배열에서 target의 시작과 끝 인덱스를 배열로 반환하는 문제이다.
// 문제에서 주어진 조건은 O(log n)의 시간복잡도로 문제를 풀어야했고 이진탐색을 활용하여 문제 해결을 시도했다.
// 처음에는 target이 최대 2개일거라고 문제를 해석해서 밑에 실패한 풀이처럼 문제를 풀었다.
// 하지만 nums가 [3,3,3]인 테스트 케이스가 있다는 것을 확인했고, 풀이를 수정했다.
// 전체 문제 풀이는 이진탐색을 이용했고, 실패 풀이보다 더 추가한 풀이 방법은
// start와 end 변수를 추가로 만들고 만약 nums[mid]가 target과 일치하는 경우에는
// start와 end 변수를 각각 -1, +1 하는 while문을 추가했다.
// 그리고 더이상 start, end 변수를 다루는 while문이 실행되지 않는 경우에는
// start + 1, end -1 을 반환하도록 했다.

// 실패한 풀이
// target이 nums 안에서 2개일거라고 단정해서 실패
// nums = [3,3,3] target = 3 에서 실패
// var searchRange = function (nums, target) {
//   if (nums.length === 0) return [-1, -1];
//   if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1];

//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       if (nums[mid - 1] === target) {
//         return [mid - 1, mid];
//       } else if (nums[mid + 1] === target) {
//         return [mid, mid + 1];
//       } else {
//         return [mid, mid];
//       }
//     }

//     if (nums[mid] < target) {
//       left = mid + 1;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     }
//   }
//   return [-1, -1];
// };

// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

const searchInsert = function (nums, target) {
  let minNum = 0;
  let maxNum = nums.length - 1;
  let midNum = Math.floor((maxNum + minNum) / 2);

  while (nums[midNum] !== target && minNum <= maxNum) {
    if (target < nums[midNum]) {
      maxNum = midNum - 1;
    } else {
      minNum = midNum + 1;
    }
    midNum = Math.floor((maxNum + minNum) / 2);
  }

  return nums[midNum] === target ? midNum : minNum;
};

console.log(searchInsert([1, 3, 4, 5, 6], 2));

// 구현과정
// 정렬된 배열에서 target의 위치 확인
// target이 있다면, 해당 index 출력
// target이 없다면, 오름차순 순서에 맞춰 target이 위치할 index 출력
// 요구사항 - 시간복잡도 O(log n)

// 선형탐색과 같은 완전 탐색시에는 시간복잡도가 O(n)으로 사용 x
// 시간복잡도 O(log n)인 이진 탐색법(Binary search) 사용

// 이진탐색법(Binary search)
// 정렬된 배열에서 사용 가능한 탐색법으로 예를들어, 오름차순으로 정렬된 배열에서
// 전체 배열의 중간 값과 찾고자하는 값을 비교하고 찾고자하는 값이 중간값보다 큰 경우
// 탐색범위를 중간값의 우측(큰 수)으로 이동, 반대의 경우 좌측으로 이동하며, 앞선 과정을 반복한다.
// 시간복잡도 O(log n)

// 선형탐색법(Linear search)
// 흔히 우리가 알고 있는 탐색법으로 앞에서부터 순서대로 값을 탐색해나간다.
// 배열에서 우리가 찾고자 하는 값이 없거나, 맨 마지막에 있는 경우가 있기 때문에, 시간복잡도는 O(n)이다

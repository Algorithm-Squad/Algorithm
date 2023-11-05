// https://leetcode.com/problems/single-element-in-a-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);

    if (mid % 2 === 0) {
      // mid가 짝수이면서, nums[mid]와 nums[mid + 1]가 같다는 것은
      // 현재 mid 이전에 짝수개의 요소가 있다는 의미이다.
      // 따라서, left를 mid + 2로 할당한다.
      if (nums[mid] === nums[mid + 1]) {
        left = mid + 2;
      } else {
        // 미드가 짝수이면서, nums[mid]와 nums[mid + 1]가 같지 않다는 것은
        // 현재 mid 이전에 홀수개의 요소가 있다는 의미이다.
        // 따라서, right를 mid로 할당한다.
        right = mid;
      }
    } else {
      // mid가 홀수이면서, nums[mid]와 nums[mid - 1]가 같다는 것은
      // 현재 mid 이전에 짝수개의 요소가 있다는 의미이다.
      // 따라서, left를 mid + 1로 할당한다.
      if (nums[mid] === nums[mid - 1]) {
        left = mid + 1;
      } else {
        // mid가 홀수이면서, nums[mid]와 nums[mid - 1]가 같지 않다는 것은
        // 현재 mid 이전에 홀수개의 요소가 있다는 의미이다.
        // 따라서, right를 mid - 1로 할당한다.
        right = mid - 1;
      }
    }
  }

  return nums[left];
};

console.log('answer1', singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
console.log('answer2', singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])); // 10

// 매개변수
// nums: 정수를 요소로 갖는 배열

// 출력
// nums 배열에서 한 번만 등장하는 요소

// 문제 설명 및 해결
// 정수를 요소로 갖는 배열 nums가 주어졌을 때, 한 번만 등장하는 요소를 구하는 문제이다.
// 시간복잡도는 O(log n)으로 해결해야 하며 공간복잡도는 O(1)로 해결해야 한다.
// 공간복잡도가 O(1)이라는 것은 추가적인 배열을 사용하지 않고 해결해야 한다는 것이다.
// nums 배열은 오름차순으로 정렬되어 있고, 한 번만 등장하는 요소는 무조건 짝수 인덱스에 있다.
// nums 배열의 길이가 1이면 nums[0]을 반환하고, nums 배열의 길이가 3 이상일 때, nums 배열의 중간 인덱스를 구한다.(nums 배열의 길이가 2일수는 없다)
// 중간 인덱스가 짝수이면 중간 인덱스와 중간 인덱스 + 1의 요소가 같으면 중간 인덱스 + 2를 left에 할당하고, 같지 않으면 중간 인덱스를 right에 할당한다.
// 중간 인덱스가 홀수이면 중간 인덱스와 중간 인덱스 - 1의 요소가 같으면 중간 인덱스 + 1를 left에 할당하고, 같지 않으면 중간 인덱스를 right에 할당한다.
// left와 right가 같아질 때까지 반복하면서 left를 반환한다.

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

const moveZeroes = function (nums) {
  let signal = 'a';

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(signal);
      i--;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === signal) nums[j] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

// 숫자로 이루어진 배열. 배열의 요소중에 숫자 0을 모두 배열의 마지막으로 옮긴다. 대신 0이 아닌 다른 숫자의 순서는 그대로 둔다.
// 배열을 새롭게 복사하지 않고, 원본 배열에서 이동시킨다. (즉, 새로운 배열을 생성하여 메모리를 할당하지 않는다)
// nums 배열을 순회하면서, 배열의 요소가 0인 경우, 해당 요소 다음 요소부터 splice 매서드를 통해 배열 잘라내기(새로운 배열 생성 x) -> 여기서의 시간복잡도는??
// nums 배열에 특정 문자 push
// 이후 nums 배열을 다시 순회하면서 특정문자인 경우 0으로 변경.
// 시간복잡도 배열 2회 순회 O(n^2)

const moveZeroes2 = function (nums) {
  nums.sort((a, b) => {
    if (a !== 0 && b === 0) return -1;
    return 0;
  });

  return nums;
};
console.log(moveZeroes2([0, 1, 0, 3, 12]));

// 시간복잡도 O(nlogn) 풀이
// javascript v8엔진에서의 sort() 매서드는 timsort 방식을 사용하며, 시간복잡도는 O(nlogn)이다.
// sort() 매서드의 비교함수에서 a,b 를 비교하면서
// return 값이 -1인 경우, a는 b의 앞에 위치하게 된다.
// return 값이 1인 경우, a는 b의 뒤에 위치하게 된다.
// return 값이 0인 경우, a와 b의 위치는 변하지 않는다.

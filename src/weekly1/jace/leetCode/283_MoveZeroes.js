/*
p283: Move Zeroes

• 정수로 이루어진 배열 nums
• 정수 배열 요소 중 0은 배열의 가장 마지막으로 이동
• 반면, 0이 아닌 정수 요소들의 기존 순서는 그대로 두기
*/

const nums = [0, 1, 0, 3, 12];

const moveZeroes = (nums) => {
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];

      if (idx !== i) nums[i] = 0;
      idx++;
    }
  }

  return nums;
};

console.log(moveZeroes(nums));

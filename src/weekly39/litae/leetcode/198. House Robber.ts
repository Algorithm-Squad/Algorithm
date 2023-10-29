function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prevMax = 0;
  let currMax = 0;

  for (let i = 0; i < nums.length; i++) {
    const temp = currMax;
    currMax = Math.max(prevMax + nums[i], currMax);
    prevMax = temp;
  }

  return currMax;
}

// 풀이 방법
// 1. nums 배열이 빈 배열이거나 length가 1일 때 예외처리
// 2. for문을 돌면서 이전의 최대값과 현재값을 비교

// 풀이 예시
// nums = [2,7,9,3,1] 일 때

// 1.
// temp = 0
// currMax = Math.max(0 + 2, 0) = 2
// prev = 0

// 2.
// temp = 2
// currMax = Math.max(0 + 7, 2) = 7
// prev = 2

// 3.
// temp = 7
// currMax = Math.max(2 + 9, 7) = 11
// prev = 7

// 4.
// temp = 11
// currMax = Math.max(7 + 3, 11) = 11
// prev = 11

// 5.
// temp = 11
// currMax = Math.max(11 + 1, 11) = 12
// prev = 11

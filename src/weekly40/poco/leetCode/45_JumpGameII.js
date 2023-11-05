// https://leetcode.com/problems/jump-game-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // dp 배열의 각 요소는 해당 요소까지 최소 몇번만에 도달할 수 있는지를 기록한다
  const dp = new Array(nums.length).fill(0);

  // 이중 for 문을 통해 dp[i + j]는 결국 i는 nums 배열의 idx를 의미하고
  // j는 nums[i]의 값이므로, dp[i + j]는 결국 i번째 idx에서 점프해서 이동할 수 있는 지점을 의미한다.(최소 1부터 j까지))
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j < nums.length) {
        if (dp[i + j] === 0) {
          // dp[i + j]까지 도달하는데 걸리는 횟수가 0이라면
          // dp[i + j]까지 도달하는데 걸리는 횟수는 dp[i] + 1이다.
          dp[i + j] = dp[i] + 1;
        } else {
          // dp[i + j]까지 도달하는데 걸리는 횟수가 0이 아니라면
          // dp[i + j]까지 도달하는데 걸리는 횟수와 dp[i] + 1 중에서 작은 값을 dp[i + j]에 할당한다.
          // 그래야 dp[i + j]까지 도달하는데 걸리는 최소 횟수를 구할 수 있다.
          dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
        }
      }
    }
  }

  return dp[nums.length - 1];
};

console.log(jump([2, 3, 1, 1, 4])); // 2

// 매개변수
// nums : 정수를 요소로 갖는 배열

// 출력
// nums 배열의 요소들을 이용하여 마지막 인덱스로 이동할 수 있는 최소 점프 횟수

// 문제 설명 및 해결
// nums 배열의 각 요소는 현재 위치에서 점프할 수 있는 최대 거리를 의미한다.
// nums 배열의 요소들을 이용하여 마지막 인덱스로 이동할 수 있는 최소 점프 횟수를 구하는 문제이다.
// dp를 사용해서 문제를 해결해야 한다.
// dp 배열의 각 요소는 해당 요소까지 최소 몇번만에 도달할 수 있는지를 기록한다.
// 이중 for 문을 통해 dp[i + j]는 결국 i는 nums 배열의 idx를 의미하고
// j는 nums[i]의 값이므로, dp[i + j]는 결국 i번째 idx에서 점프해서 이동할 수 있는 지점을 의미한다.(최소 1부터 j까지))
// dp[i + j]까지 도달하는데 걸리는 횟수가 0이라면 dp[i + j]까지 도달하는데 걸리는 횟수는 dp[i] + 1이다.
// dp[i + j]까지 도달하는데 걸리는 횟수가 0이 아니라면 dp[i + j]까지 도달하는데 걸리는 횟수와 dp[i] + 1 중에서 작은 값을 dp[i + j]에 할당한다.
// 그래야 dp[i + j]까지 도달하는데 걸리는 최소 횟수를 구할 수 있다.
// 마지막으로 dp[nums.length - 1]을 반환하면 최소 점프 횟수를 구할 수 있다.

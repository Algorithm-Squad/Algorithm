// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  // dp 배열의 각 요소는 해당 요소까지 최대 몇개의 증가하는 부분 수열이 있는지를 기록한다.
  const dp = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    let max = 1;

    for (let j = 0; j < i; j++) {
      // 만약 i 번째의 숫자가 j 번째의 숫자보다 크다면
      // dp[i]는 dp[j] + 1과 이전 j번째 숫자에서 증가부분인 max중에 큰 수가 된다
      // dp[j] + 1은 이전에 증가하는 부분에 i번째 숫자를 방문하는 1가지를 더히는 것이다.
      if (nums[j] < nums[i]) {
        // max = dp[j] + 1; 만약 0, 1, 0, 3의 경우에는 dp[3]은 3이 되어야 하는데, 2가 된다.
        // 즉, i번째 숫자보다 앞선 j번째의 숫자들 중에서 가장 큰 dp[j] + 1을 구해야하기 때문에
        // dp[j] + 1과 max 중에서 큰 값을 dp[i]에 할당해야 한다.
        max = Math.max(max, dp[j] + 1);
      }
    }
    dp[i] = max;
  }

  return Math.max(...dp);
};

// 매개변수
// nums: 정수를 요소로 갖는 배열

// 출력
// nums 배열에서 가장 긴 증가하는 부분 수열의 길이

// 문제 설명 및 해결
// nums 배열에서 가장 긴 증가하는 부분 수열의 길이를 구하는 문제이다.
// dp를 사용해서 문제를 해결해야 한다.
// dp 배열의 각 요소는 해당 요소까지 최대 몇개의 증가하는 부분 수열이 있는지를 기록한다.
// 이중 for 문을 통해 i 번째의 숫자가 j 번째의 숫자보다 크다면
// dp[i]는 dp[j] + 1과 이전 j번째 숫자에서 증가부분인 max중에 큰 수가 된다.
// dp[j] + 1은 이전에 증가하는 부분에 i번째 숫자를 방문하는 1가지를 더히는 것이다.
// dp[j] + 1과 max 중에서 큰 값을 dp[i]에 할당해야 한다.

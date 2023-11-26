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
      if (nums[j] < nums[i]) {
        console.log(max);
        // max = dp[j] + 1;
        // 위와 같이 하면 이렇게 하면 0, 1, 0, 3 의 경우에 dp[3]에는 dp[j] + 1인 2가 아닌 3이 들어가야한다.
        // 즉, 이전 j 값중에 i보다 작은 숫자중에 max값이 들어가야 한다.
        // 따라서 dp[j] + 1과 max중에 큰 값을 넣어줘야 한다.
        max = Math.max(dp[j] + 1, max);
      }
    }
    dp[i] = max;
  }
  console.log(dp);
  return Math.max(...dp);
};

console.log(lengthOfLIS([0, 1, 0, 3]));

// 매개변수
// nums: 정수를 요소로 갖는 배열

// 출력
// nums 배열에서 가장 긴 증가하는 부분 수열의 길이

// 문제 설명 및 해결
// nums 배열에서 가장 긴 증가하는 부분 수열의 길이를 구하는 문제이다.
// dp를 사용해서 문제를 해결했다.
// dp 배열의 각 요소는 해당 요소까지 최대 몇개의 증가하는 부분 수열이 있는지를 기록한다.
// 이중 포문을 사용해서 dp 배열을 구한다.
// 만약 i번째 요소가 j번째 요소보다 크다면, dp[i]는 dp[j] + 1와 이전 j번째의 값(max) 중에 큰 값이 된다.

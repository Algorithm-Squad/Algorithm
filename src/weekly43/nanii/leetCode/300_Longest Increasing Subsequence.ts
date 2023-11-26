/**
 * 300. Longest Increasing Subsequence / Meduim
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param nums
 * @returns nums 배열에서 가장 긴 증가하는 부분 수열의 길이 (같은 수가 일정할 땐 1)
 */
function lengthOfLIS(nums: number[]): number {
  const dp = Array(nums.length).fill(1); // 값이 동일할 땐 1이므로, 증가하지 않았을 때를 대비해 1로 초기화

  return dp.reduce((acc, _, i) => {
    for (let j = 0; j < i; j++) {
      // i 번째 인덱스에 대해 0~i-1번째 인덱스를 순회하고
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
      // i 번째 인덱스의 값이 j 번째 인덱스의 값보다 크다면, dp[i] = dp[j] + 1 (누적)
    }
    return Math.max(acc, dp[i]); // dp[i]의 max 반환
  }, 0);
}

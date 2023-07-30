/**
 * 1143. Longest Common Subsequence / Medium
 * https://leetcode.com/problems/longest-common-subsequence/submissions/
 * @param text1
 * @param text2
 */
function longestCommonSubsequence(text1: string, text2: string): number {
  const col = text1.length;
  const row = text2.length;
  const dp: number[][] = Array((col + 1)).fill(0).map(() => Array((row + 1)).fill(0));
  for(let i = 1; i <= col; i++) {
    for(let j = 1; j <= row; j++) {
      if(text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[col][row];
};
/**
 * 문제출처: https://leetcode.com/problems/unique-paths/
 * 시작시간: 11:00
 * 종료시간: 12:10
 * 결과: 성공
 */

function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m }, () => Array(m).fill(1));

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7)) // 28
console.log(uniquePaths(3, 2)) // 3

// m = 2, n = 7
// 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7

// m = 3, n = 7
// 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7
// 1 3 6 10 15 21 28

// 위 패턴을 유추해 봤을 때, dp를 활용해야 할 것 같다.
// dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

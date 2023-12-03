// https://leetcode.com/problems/minimum-path-sum/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // grid의 행의 개수
  const row = grid.length;
  // grid의 열의 개수
  const col = grid[0].length;

  // dp[i][j] : (0, 0)에서 (i, j)까지 이동할 때, 최소의 합
  const dp = Array.from(Array(row), () => Array(col).fill(0));
  console.log(dp);
  dp[0][0] = grid[0][0];

  // 첫번째 행의 dp를 구한다.
  for (let i = 1; i < col; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  // 첫번째 열의 dp를 구한다.
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // dp를 구한다.
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      // (i, j)까지 이동할 때, 최소의 합은
      // (i - 1, j)까지 이동할 때, 최소의 합과 (i, j - 1)까지 이동할 때, 최소의 합 중에서 더 작은 값과 (i, j)의 값의 합이다.
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      console.log(dp);
    }
  }

  return dp[row - 1][col - 1];
};

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

// 매개변수
// grid: 2차원 배열

// 출력
// grid의 좌측 상단에서 우측 하단까지 이동할 때, 최소의 합

// 문제 설명 및 해결

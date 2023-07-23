// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  const dp = Array.from(Array(m), () => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
// 매개변수
// m: grid의 행
// n: grid의 열

// 출력
// m x n grid의 왼쪽 위에서 오른쪽 아래로 이동하는 모든 경로의 수

// 문제 설명 및 해결
// m x n grid의 왼쪽 위에서 오른쪽 아래로 이동하는 모든 경로의 수를 구하는 문제
// 이동은 오른쪽 또는 아래로만 가능하고 한번에 한칸씩만 이동할 수 있다
// 이동할 수 있는 방향이 오른쪽과 아래밖에 없기 때문에
// (0, 0)에서 (m, n)까지 이동하는 경로의 수는
// (0, 0)에서 (m - 1, n)까지 이동하는 경로의 수와
// (0, 0)에서 (m, n - 1)까지 이동하는 경로의 수를 더한 값과 같다
// 이를 재귀적으로 표현하면 다음과 같다
// uniquePaths(m, n) = uniquePaths(m - 1, n) + uniquePaths(m, n - 1)이고
// 이를 코드로 표현하면 다음과 같다
// const uniquePaths = function (m, n) {
//   if (m === 1 || n === 1) return 1;
//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
// };
// 하지만 중복되는 계산이 많기 때문에 시간초과가 발생한다

// 이를 해결하기 위해 DP를 사용한다
// DP를 사용하기 위해 2차원 배열을 만들어준다
// 2차원 배열의 크기는 m x n이다
// 2차원 배열의 각 요소는 해당 좌표까지 이동하는 경로의 수를 저장한다
// 2차원 배열의 첫번째 행과 첫번째 열의 값은 1로 초기화한다
// 2차원 배열의 각 요소의 값을 구하기 위해 다음과 같은 점화식을 사용한다
// dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
// dp라는 2차원 배열을 만들어주고, 최종적으로 배열의 index는 0부터 시작하기 때문에
// m-1의 n-1번째 요소를 반환한다

// 5 x 5 grid의 경우 다음과 같은 2차원 배열이 만들어진다
// [
//   [0, 1, 1, 1, 1],
//   [1, 2, 3, 4, 5],
//   [1, 3, 6, 10, 15],
//   [1, 4, 10, 20, 35],
//   [1, 5, 15, 35, 70],
// ];

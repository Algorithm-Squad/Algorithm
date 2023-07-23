/**
 * 62. Unique Paths / Medium
 * https://leetcode.com/problems/unique-paths/
 * @param m 이중배열의 가로
 * @param n 이중배열의 세로
 * @returns 이중배열의 [0,0]에서 [m-1, n-1]으로 이동하는 경우의 수
 * 시작점에서 오른쪽 또는 아래쪽으로만 이동할 수 있으므로 한칸씩 이동할 때마다
 * 이중배열의 이동 지점에 +1을 해주기 위해 이중배열을 생성할 때 초기값을 fill(1)로 채워준다.
 * 이중배열을 순회하면서 현재 지점의 위쪽값과 왼쪽값을 더하면서 이중배열을 채워나간다.
 */
function uniquePaths(m: number, n: number): number {
  const path = Array.from(Array(m), () => Array(n).fill(1));
  for(let i = 1; i < m; i ++ ) {
    for(let j = 1; j < n; j ++) {
      path[i][j] = path[i - 1][j] + path[i][j - 1];
    }
  }
  return path[m - 1][n - 1];
};
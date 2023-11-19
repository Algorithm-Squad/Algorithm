/**
 * 64. Minimum Path Sum / Medium
 * https://leetcode.com/problems/minimum-path-sum/description/
 * @param grid 2차원 배열
 * 양의 정수가 담긴 배열 grid에서, 왼쪽위에서 오른쪽아래로 이동할때 경로에 있는 숫자들의 합이 최소가 되는 경로를 찾아서 그 합을 리턴
 * 오른쪽이나 아래로 이동할 때 숫자를 더하면서 이동하는데 합이 최소여야됨!!!!
 */
function minPathSum(grid: number[][]): number {
  const n = grid[0].length; // x
  const m = grid.length; // y

  for (let x = 1; x < n; x++) {
    grid[0][x] += grid[0][x - 1];
  }
  for (let y = 1; y < m; y++) {
    grid[y][0] += grid[y - 1][0];

    for (let x = 1; x < n; x++) {
      grid[y][x] += Math.min(grid[y - 1][x], grid[y][x - 1]);
    }
  }
  return grid[m - 1][n - 1];
}

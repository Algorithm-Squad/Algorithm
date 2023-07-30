/**
 * 문제출처: https://leetcode.com/problems/max-area-of-island/
 * 시작시간: 11:30
 * 종료시간: 12:30
 * 결과: 통과
 */

function maxAreaOfIsland(grid: number[][]): number {
  let islandSize: number = 0;
  let biggestIsland: number = 0;

  function dfs(grid: number[][], row: number, column: number): void {
    if (
      Math.min(row, column) < 0 ||
      row >= grid.length ||
      column >= grid[0].length ||
      grid[row][column] == 0
    ) {
      return;
    }
    islandSize++;
    grid[row][column] = 0;
    dfs(grid, row + 1, column);
    dfs(grid, row - 1, column);
    dfs(grid, row, column + 1);
    dfs(grid, row, column - 1);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] == 1) {
        dfs(grid, row, column);
        if (islandSize > biggestIsland) {
          biggestIsland = islandSize;
        }
        islandSize = 0;
      }
    }
  }

  return biggestIsland;
}
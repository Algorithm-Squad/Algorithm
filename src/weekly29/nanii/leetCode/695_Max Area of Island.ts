/**
 * 695. Max Area of Island / Medium
 * https://leetcode.com/problems/max-area-of-island
 * @param grid 섬과 바다로 이루어진 2D 그리드 맵
 * @returns 섬의 최대 넓이
 */
function maxAreaOfIsland(grid: number[][]): number {
  let sum = 0;

  const row = grid.length;
  const col = grid[0].length;
  const dfs = (x: number, y: number): number => {
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) return 0;
    grid[x][y] = 0;
    return 1 + dfs(x + 1, y) + dfs(x, y + 1) + dfs(x - 1, y) + dfs(x, y - 1);
  }

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(grid[i][j] === 1) sum = Math.max(sum, dfs(i, j));
    }
  }
  return sum;
};
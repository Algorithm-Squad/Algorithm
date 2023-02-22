/**
 * 200. Number of Islands / Medium
 * https://leetcode.com/problems/number-of-islands/
 * 문제해석 : grid를 살피면서 1이 나올경우 해당 위치에서 [-1,0][+1,0][0,-1][0,+1]위치의 값을 확인
 *
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
   let answer = 0;

   const dfs = (grid, i, j) => {
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;
    grid[i][j] = '0'
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }

  for(let row = 0 ; row < grid.length; row ++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === '1') {
        answer ++;
        dfs(grid, row, col);
      }
    }
  }
  return answer;
};

// const grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]; //1

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]; //3

console.log(numIslands(grid));
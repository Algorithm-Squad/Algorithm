/**
 * 48. Rotate Image / Medium
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
*/
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const length = n - 1;

  for (let x = 0; x < n; x++) {
    // 한번 이동시켰으면 반대쪽 중복 이동시키지 않기 위해 y < n - x
    for (let y = 0; y < n - x; y++) {
      [matrix[x][y], matrix[length - y][length - x]] = [matrix[length - y][length - x], matrix[x][y]];
    }
  }
  matrix.reverse();
};
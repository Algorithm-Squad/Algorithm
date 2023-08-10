/**
 * 문제출처: https://leetcode.com/problems/rotate-image/
 * 시작시간: 13:45
 * 종료시간: 14:30
 * 결과: 성공
 */

function rotate(matrix: number[][]): void {
  const duplicateArray: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    const innerArray: number[] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      innerArray.push(matrix[i][j]);
    }
    duplicateArray.push(innerArray);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] = duplicateArray[matrix.length - 1 - j][i];
    }
  }
}

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

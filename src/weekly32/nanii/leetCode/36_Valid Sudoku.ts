/**
 * 36. Valid Sudoku / Medium
 * https://leetcode.com/problems/valid-sudoku/
 * <규칙>
 * 1. 행, 열에서 반복없이 1-9까지의 숫자
 * 2. 3*3 박스에서 반복없이 1-9까지의 숫자
 * @param board
 */
function isValidSudoku(board: string[][]): boolean {
  // 배열을 순회하면서 숫자에 대한 포지션을 저장
  const map = new Map();
  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col !== '.') {
        map.has(col) ? map.get(col).push([rowIndex, colIndex]) : map.set(col, [[rowIndex, colIndex]]);
      }
    })
  });
  return checkDuplicate(map);
};

const checkDuplicate = (map: Map<string, number[][]>) => {
  // row, col, 3*3 중복 검사
  for (const [_, value] of map) {
    const row = new Set();
    const col = new Set();
    const board = new Set();
    for (let i = 0; i < value.length; i++) {
      const [rowIdx, colIdx] = value[i];
      if (row.has(rowIdx) || col.has(colIdx) || board.has(Math.floor(rowIdx / 3) * 3 + Math.floor(colIdx / 3))) {
        return false;
      }
      row.add(rowIdx);
      col.add(colIdx);
      board.add(Math.floor(rowIdx / 3) * 3 + Math.floor(colIdx / 3));
    }
  }
  return true;
}
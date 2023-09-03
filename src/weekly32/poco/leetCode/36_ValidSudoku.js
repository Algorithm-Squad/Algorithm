// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  return (
    board.every((column) => isValidColumn(column)) &&
    rotateMatrix(board).every((column) => isValidColumn(column)) &&
    extractMatrix(board).every((column) => isValidColumn(column))
  );
};

// "."을 제외한 숫자들을 Set에 넣어 개수를 비교하는 함수
const isValidColumn = (column) => {
  const onlyNumbers = column.filter((num) => num !== '.');
  const set = new Set(onlyNumbers);
  return set.size === onlyNumbers.length;
};

const rotateMatrix = (matrix) =>
  matrix[0].map((column, index) => matrix.map((row) => row[index]));

const extractMatrix = (matrix) => {
  const squares = [[], [], [], [], [], [], [], [], []];

  matrix.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const squareIndex =
        Math.floor(rowIndex / 3) * 3 + Math.floor(columnIndex / 3);

      squares[squareIndex].push(cell);
    });
  });

  return squares;
};

console.log(
  isValidSudoku([
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ])
);

// 매개변수
// board : 문자 타입을 요소로 갖는 2차원 배열

// 출력
// board가 유효한 스도쿠 판이라면 true, 아니라면 false

// 문제 설명 및 풀이
// 스도쿠 판이 유효한지 확인하는 문제이다.
// 스도쿠 판이 유효하려면 다음과 같은 조건을 만족해야 한다.
// 1. 각 행에는 1부터 9까지의 숫자가 중복되지 않게 들어가야 한다.
// 2. 각 열에는 1부터 9까지의 숫자가 중복되지 않게 들어가야 한다.
// 3. 3x3 크기의 그리드 안에 1부터 9까지의 숫자가 중복되지 않게 들어가야 한다.
// 이 문제에서는 위 3가지 조건을 모두 만족하는 스도쿠 판인지 확인하는 문제이다.

// 1차시도(실패)
// const isValidSudoku = (board) => {
//   let row = {
//     cur: [],
//   };
//   let column = {
//     0: [],
//     1: [],
//     2: [],
//     3: [],
//     4: [],
//     5: [],
//     6: [],
//     7: [],
//     8: [],
//   };

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       const key = board[i][j];
//       if (key === '.') {
//         continue;
//       }

//       if (row['cur'].includes(key) || column[j].includes(key)) {
//         return false;
//       }

//       row['cur'].push(key);
//       column[j].push(key);
//     }
//     row['cur'] = [];
//   }
//   return true;
// };

// 문제 설명 및 풀이
// row, column 객체를 만들고, row에는 하나의 키(cur)를 갖고, column에는 0부터 9까지의 키를 갖으며 프로퍼티는 빈배열을 넣어준다.
// 2중 for문을 순회하면서, row와 column에 각각의 키가 존재하는지 확인한다.
// 만약 존재한다면, false를 반환하고, 존재하지 않는다면, row와 column의 해당하는 배열에 에 각각의 키를 넣어준다.
// row는 첫 번째 for문이 한번 순회를 마치면 빈배열로 초기화 시킨다.

// 3x3 크기의 그리드 안에 1부터 9까지의 숫자가 중복되지 않게 들어가야 한다는 조건을 간과한 풀이.
// 실패 케이스 (473)
// Output: true / Expected: false
// [
//   ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
//   ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
//   ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
//   ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
//   ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//   ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
//   ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
// ];

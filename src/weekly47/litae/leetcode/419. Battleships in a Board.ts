function countBattleships(board: string[][]): number {
  const rows = board.length;
  if (rows === 0) return 0;
  const cols = board[0].length;

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "X") {
        if (
          (i === rows - 1 || board[i + 1][j] === ".") &&
          (j === cols - 1 || board[i][j + 1] === ".")
        ) {
          count++;
        }
      }
    }
  }

  return count;
}

// 문제 풀이
// 1. 이중 for문을 돌면서 각 배의 마지막을 찾는다
// 2. 마지막을 찾는 방법은 해당 문자가 X이고, 우측이나 아래에 X 문자열이 없는 경우 배의 끝이 된다
// 3. 조건문을 통해 위의 조건에 맞는 배의 끝의 수를 카운트한다.

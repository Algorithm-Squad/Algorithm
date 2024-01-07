/**
 * 419. Battleships in a Board / Medium
 * https://leetcode.com/problems/battleships-in-a-board/
 * @param board 2차원 배열에서 X는 전함 (수평, 수직으로 이어짐) , .은 빈칸
 * @returns X로 이어진 전함의 갯수
 */
function countBattleships(board: string[][]): number {
  let count = 0;
  const row = board.length;
  const col = board[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'X') {
        // 전함의 시작점을 찾아야됨
        if (
          (i > 0 && board[i - 1][j] === 'X') ||
          (j > 0 && board[i][j - 1] === 'X')
        )
          continue;
        // (왼쪽이나 위쪽이 X가 아닌 경우 ++ )
        count++;
      }
    }
  }
  return count;
}

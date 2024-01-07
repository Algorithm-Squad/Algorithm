// https://leetcode.com/problems/battleships-in-a-board/

/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = function (board) {
  let answer = 0;

  const dfs = (i, j) => {
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) return;
    if (i + 1 < board.length && board[i + 1][j] === 'X') {
      board[i + 1][j] = 1;
      dfs(i + 1, j);
    } else if (i - 1 > 0 && board[i - 1][j] === 'X') {
      board[i - 1][j] = 1;
      dfs(i - 1, j);
    } else if (j + 1 < board[i].length && board[i][j + 1] === 'X') {
      board[i][j + 1] = 1;
      dfs(i, j + 1);
    } else if (j - 1 > 0 && board[i][j - 1] === 'X') {
      board[i][j - 1] = 1;
      dfs(i, j - 1);
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        answer++;
        board[i][j] = 1;
        dfs(i, j);
      }
    }
  }
  return answer;
};

console.log(
  countBattleships([
    ['X', '.', '.', 'X'],
    ['.', '.', '.', 'X'],
    ['.', '.', '.', 'X'],
  ])
); // 2

// 방문한 것을 숫자 1로 바꾸자

// 매개변수
// board : 2차원 배열. 'X'는 전함이 있는 곳, '.'은 전함이 없는 곳

// 출력
// 전함의 수

// 문제 설명 및 해결
// 2차원 배열 board가 주어졌을 때, "X"는 전함이 있는 곳, "."은 전함이 없는 곳이다.
// 전함은 가로 또는 세로로 연속되어 있으며, 한 칸을 띄고 있으면 다른 전함이다.
// board에 있는 전함의 전체 개수를 구하는 문제이다.
// dfs를 사용하여 문제를 해결했다.
// 먼저 2차원 배열 board를 순회하면서 "X"를 만나면 answer를 증가시키고, 해당 위치를 1(방문했다는 표시)로 바꾼다.
// 그리고 해당 i, j를 dfs의 매개변수로 전달한다.
// dfs에서는 i, j를 기준으로 상하좌우 위치에 "X"가 있는지를 확인하고,
// "X"가 있다면 해당 위치를 1(방문했다는 표시)로 바꾸고 다시 그 위치를 기준으로 상하좌우에 "X"가 있는지를 확인한다.
// 이렇게 반복하면, 전함의 개수를 구할 수 있다.

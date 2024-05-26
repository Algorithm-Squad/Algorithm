// https://school.programmers.co.kr/learn/courses/30/lessons/160585

const solution = (board) => {
  let O = 0; // 'O' 개수
  let OBingo = false; // 'O' 빙고 여부
  let X = 0; // 'X' 개수
  let XBingo = false; // 'X' 빙고 여부

  // 주어진 board를 2차원 배열로 만든다.
  const map = board.map((item) => item.split(''));

  //
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'O') {
        O++;
        if (checkBingo(i, j, map)) OBingo = true;
      } else if (map[i][j] === 'X') {
        X++;
        if (checkBingo(i, j, map)) XBingo = true;
      }
    }
  }

  // 규칙 여부 판단
  return checkRule(O, X, OBingo, XBingo) ? 1 : 0;
};

// 정상적인 규칙으로 이루어져 있는지 판단하는 함수
function checkRule(O, X, OBingo, XBingo) {
  if (O === X) {
    // O의 개수와 X의 개수가 같은 경우에는 X만 이길 수 있다.
    if (!OBingo && !XBingo) return true; // 둘 다 빙고를 완성 못하는 경우
    if (!OBingo && XBingo) return true; // X가 빙고일 경우
  } else if (O === X + 1) {
    // 13) O의 개수가 X보다 1개 많을 경우 (O만 이길 수 있음)
    if (!OBingo && !XBingo) return true; // 둘 다 빙고를 완성 못하는 경우
    if (OBingo && !XBingo) return true; // O가 빙고일 경우
  }

  // 위의 상황이외에는 비정상인 경우이기에 false 반환
  return false;
}

// 빙고 여부를 판단하는 함수
// 범위를 +2로 판단하기 때문에, 첫번째 줄에서 판단이 가능하다.
function checkBingo(i, j, board) {
  // 빙고 판단(좌측 상단에서 우측 하단 방향)
  if (j + 2 < board[i].length && i + 2 < board.length) {
    if (
      board[i][j] === board[i + 1][j + 1] &&
      board[i][j] === board[i + 2][j + 2]
    )
      return true;
  }
  // 빙고 판단(가로 방향)
  if (j + 2 < board[i].length) {
    if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2])
      return true;
  }
  // 빙고 판단(세로 방향)
  if (i + 2 < board.length) {
    if (board[i][j] === board[i + 1][j] && board[i][j] === board[i + 2][j])
      return true;
  }
  // 빙고 판단(우측 상단에서 좌측 하단 방향)
  if (j >= 2 && i + 2 < board.length) {
    if (
      board[i][j] === board[i + 1][j - 1] &&
      board[i][j] === board[i + 2][j - 2]
    )
      return true;
  }

  // 빙고가 아니라면 false 반환
  return false;
}

console.log(solution(['O.X', '.O.', '..X'])); // 1
console.log(solution(['OOO', '...', 'XXX'])); // 0

// 매개변수
// board : 3x3 크기의 게임판

// 출력
// 주어진 board판이 규칙을 지켜서 틱택토를 진행했을 때 나올 수 있는 게임 상황이면 1을
// 아니라면 0을 반환하는 문제

// 문제 설명 및 해결
// 틱택토가 진행된 board가 매개변수로 주어질 때, 다음 규칙을 어겨서 틱택토가 진행되었는지 확인하는 문제
// 틱택토에서 "O"는 선공, "X"는 후공이다.
// 다음은 틱택토 규칙을 어기는 경우의 예시이다.
// 만약 "O"를 표시할 차례인데 "X"를 표시하거나 반대로 "X"를 표시할 차례인데 "O"를 표시한다.
// 또는 선공이나 후공이 승리해서 게임이 종료되었음에도 그 게임을 진행한다.

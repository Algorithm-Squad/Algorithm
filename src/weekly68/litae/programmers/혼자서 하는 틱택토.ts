export function solution(board: string[]): number {
  let answer = 1;
  const size = 3;

  // 게임의 승부가 나지 않았을 경우,
  // 1. 선공과 후공의 개수가 같거나 선공이 1개 많아야 한다
  let [numO, numX] = [0, 0];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[j][i] === "O") numO++;
      if (board[j][i] === "X") numX++;
    }
  }

  if (numO - numX > 1 || numO - numX < 0) return 0;

  // 게임에서 승부가 났을 경우,
  let [winO, winX] = [false, false];

  // 행과 열 체크
  for (let i = 0; i < size; i++) {
    if (board[i][0] === "O" && board[i][1] === "O" && board[i][2] === "O")
      winO = true;
    if (board[i][0] === "X" && board[i][1] === "X" && board[i][2] === "X")
      winX = true;
    if (board[0][i] === "O" && board[1][i] === "O" && board[2][i] === "O")
      winO = true;
    if (board[0][i] === "X" && board[1][i] === "X" && board[2][i] === "X")
      winX = true;
  }

  // 대각선 체크
  if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O")
    winO = true;
  if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O")
    winO = true;
  if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X")
    winX = true;
  if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X")
    winX = true;

  // 1. 선공과 후공이 동시에 승리조건을 만족할 수 없음(한쪽이 승리조건을 만족하면 게임이 그대로 종료)
  if (winO && winX) return 0;

  // 2. 선공이 승리했을 경우, "O"의 개수가 "X"의 개수보다 1개 많음
  if (winO && numO !== numX + 1) return 0;

  // 3. 후공이 승리했을 경우, "O"의 개수와 "X"의 개수가 같음
  if (winX && numO !== numX) return 0;

  return answer;
}

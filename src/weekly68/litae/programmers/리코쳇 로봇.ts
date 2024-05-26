export function solution(board: string[]): number {
  let answer = -1;
  // 이중배열로 보드판 생성
  const map: string[][] = board.map((string) => string.split(""));
  // 보드판의 가로, 세로 길이
  const [row, col] = [board[0].length, board.length];
  // 방문 여부를 boolean으로 확인하는 배열
  const visited: boolean[][] = new Array(col)
    .fill(null)
    .map(() => new Array(row).fill(false));
  // 상, 우, 하, 좌로 움직이기
  const [moveX, moveY] = [
    [0, 1, 0, -1],
    [1, 0, -1, 0],
  ];
  // 게임을 시작하는 좌표 초기화
  let [startX, startY] = [0, 0];
  // BFS 탐색을 위한 큐(x좌표, y좌표, 카운트)
  const queue: number[][] = [[startX, startY, 0]];

  // 게임판의 모든 좌표를 돌며 시작점 위치(R) 탐색하고, 해당 좌표를 [startX, startY]로 설정
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (map[i][j] === "R") {
        startX = i;
        startY = j;
        break;
      }
    }
  }

  // 시작지점 방문처리
  visited[startX][startY] = true;

  // queue가 빈 배열이 될 때까지 반복하며 보드판 탐색
  while (queue.length) {
    // 큐의 첫 번째 요소 선택
    const [x, y, count] = queue.shift() as number[];

    // 해당 요소가 목표지점에 도착한 경우 정답에 해당 카운트를 선언하고 종료
    if (map[x][y] === "G") {
      answer = count;
      break;
    }

    // 해당 요소가 목표지점에 도착하지 않은 경우, 모든 방향 탐색(상, 좌, 하, 우)
    for (let i = 0; i < 4; i++) {
      let nextX = x + moveX[i];
      let nextY = y + moveY[i];

      // 다음 좌표가 보드판 내에 위치한 경우, 장애물을 만나거나 보드판 끝에 도착할 때까지 한방향으로 이동
      while (
        0 <= nextX &&
        nextX < col &&
        0 <= nextY &&
        nextY < row &&
        map[nextX][nextY] !== "D"
      ) {
        nextX += moveX[i];
        nextY += moveY[i];
      }

      // 장애물을 만나거나 보드판의 유효 범위를 벗어났을 경우 다음 위치를 마지막위치에서 한칸 뒤로 수정(이동된 좌표가 장애물 위에 있거나 유효 범위를 벗어난 상태이기 때문에 장애물 앞 또는 보드판 끝에 위치시키도록)
      nextX -= moveX[i];
      nextY -= moveY[i];

      // 아직 방문한 위치가 아니라면 해당 위치를 큐에 넣고 해당 위치를 방문처리
      if (!visited[nextX][nextY]) {
        queue.push([nextX, nextY, count + 1]);
        visited[nextX][nextY] = true;
      }
    }
  }

  return answer;
}

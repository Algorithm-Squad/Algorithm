export function solution(m: number, n: number, board: string[]): number {
  let answer = 0;

  // 보드를 2차원 배열로 변환
  let arrayBoard = board.map((block) => block.split(""));

  while (true) {
    let removedBlock: number[][] = [];

    // 2x2로 같은 모양의 블록을 찾아 제거하고 좌상단 블록 좌표를 removedBlock에 저장
    for (let y = 0; y < m - 1; y++) {
      for (let x = 0; x < n - 1; x++) {
        if (
          board[y][x] !== "X" &&
          board[y][x] === board[y][x + 1] &&
          board[y][x] === board[y + 1][x] &&
          board[y][x] === board[y + 1][x + 1]
        ) {
          removedBlock.push([y, x]);
        }
      }
    }

    // 없앨 수 있는 블록이 없는 경우 반복문 종료
    if (removedBlock.length === 0) break;

    // 저장된 배열을 돌면서 제거되어야 하는 블록을 "X"로 변경
    removedBlock.forEach((match) => {
      const [y, x] = match;
      arrayBoard[y][x] = "X";
      arrayBoard[y + 1][x] = "X";
      arrayBoard[y][x + 1] = "X";
      arrayBoard[y + 1][x + 1] = "X";
    });

    // 블록 정렬
    for (let y = m - 1; y > 0; y--) {
      for (let x = 0; x < n; x++) {
        if (board[y][x] === "X") {
          for (let l = y - 1; l >= 0; l--) {
            if (board[l][x] !== "X") {
              arrayBoard[y][x] = arrayBoard[l][x];
              arrayBoard[l][x] = "X";
              break; // 블록을 찾았으면 더 이상 확인할 필요 없음
            }
          }
        }
      }
    }
  }

  // "X"로 남아있는 블록 개수를 세기
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (arrayBoard[y][x] === "X") {
        answer++;
      }
    }
  }

  return answer;
}

// 실패 사례(시간 초과)
// for (let y = m - 1; y > 0; y--) {
//   for (let x = 0; x < n; x++) {
//     if (board[y][x] === "X" && board[y + 1][x]) {
//       board[y][x] = board[l][x];
//       board[l][x] = "X";
//     }
//   }
// }

// 현재 블록이 비어있고, 바로 위의 블록이 비어있지 않은 경우 위의 블록을 아래 블록에 채울 수 있도록 설계
// 문제 1. 세로로 두 칸이 비어있는 경우 블록 정렬을 할 수 없음
// 문제 2. 모든 블록을 순환하며 확인하기 때문에 성능 저하

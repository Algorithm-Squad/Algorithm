function solution(m, n, board) {
  let answer = 0;
  let boardArr = board.map((row) => row.split(""));
  let isDeleted = true;

  while (isDeleted) {
    isDeleted = false;

    // board와 동일한 크기의 2차원 배열을 생성해서 false로 초기화
    let deleted = Array.from({ length: m }, () =>
      Array.from({ length: n }, () => false)
    );

    // 2x2로 같은 블록이 있는지 확인하고 있으면 deleted 배열에 true로 표시
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (boardArr[i][j] === "0") {
          continue;
        }

        let target = boardArr[i][j];
        if (
          target === boardArr[i][j + 1] &&
          target === boardArr[i + 1][j] &&
          target === boardArr[i + 1][j + 1]
        ) {
          deleted[i][j] = true;
          deleted[i][j + 1] = true;
          deleted[i + 1][j] = true;
          deleted[i + 1][j + 1] = true;
          isDeleted = true;
        }
      }
    }

    // deleted 배열을 기반으로 블록을 삭제하고 삭제된 블록의 개수를 answer에 더함
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (deleted[i][j]) {
          answer += 1;
          boardArr[i][j] = "0";
        }
      }
    }

    // 블록을 삭제한 후 빈 공간을 채움
    for (let i = 0; i < n; i++) {
      for (let j = m - 1; j >= 0; j--) {
        if (boardArr[j][i] === "0") {
          for (let k = j - 1; k >= 0; k--) {
            if (boardArr[k][i] !== "0") {
              boardArr[j][i] = boardArr[k][i];
              boardArr[k][i] = "0";
              break;
            }
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])); // 14
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
); // 15

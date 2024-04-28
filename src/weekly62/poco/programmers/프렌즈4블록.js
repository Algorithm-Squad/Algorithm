// https://school.programmers.co.kr/learn/courses/30/lessons/17679

const solution = (m, n, board) => {
  let answer = 0;
  const boardArr = board.map((a) => a.split(''));
  let bool = true;

  // bool값에 따라 while문을 순회
  // while문의 한번 순회는 m x n 블록판을 한번 순회이다.
  while (bool) {
    let removed = [];

    // 이중 for문을 순회하면서 2x2 블록의 값이 모두 같고, "" 는 아닐때
    // removed 배열에 i, j 값을 넣어준다.
    // 2x2 블록의 값이 값다고 바로 제거하지 않는 이유는
    // 2x2 블록이 여러개일 수 있기 때문이다.
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          boardArr[i][j] !== '' &&
          boardArr[i][j] === boardArr[i][j + 1] &&
          boardArr[i][j] === boardArr[i + 1][j + 1] &&
          boardArr[i][j] === boardArr[i + 1][j]
        ) {
          removed.push([i, j]);
        }
      }
    }

    // removed 배열을 순회하면서 i, j값을 기준으로 2x2 블록을 지워준다.
    for (let [x, y] of removed) {
      if (boardArr[x][y] !== '') {
        boardArr[x][y] = '';
        answer++;
      }
      if (boardArr[x][y + 1] !== '') {
        boardArr[x][y + 1] = '';
        answer++;
      }
      if (boardArr[x + 1][y + 1] !== '') {
        boardArr[x + 1][y + 1] = '';
        answer++;
      }
      if (boardArr[x + 1][y] !== '') {
        boardArr[x + 1][y] = '';
        answer++;
      }
    }

    // ""으로 된 값을 블럭으로 채워주기
    for (let j = 0; j < n; j++) {
      let count = 0;
      // 아래에서부터 for문을 돌려야하기 때문에 조건을 이렇게 설정
      for (let i = m - 1; i >= 0; i--) {
        // ""면 count++
        if (boardArr[i][j] === '') {
          count++;
          // count가 있을때 i + count값을 i로 바꿈
        } else if (count > 0) {
          boardArr[i + count][j] = boardArr[i][j];
          boardArr[i][j] = '';
        }
      }
    }
    // removed 배열의 길이가 0이면, 2x2 블록이 없다는 뜻이므로
    // bool = false로 while문 탈출한다.
    if (removed.length === 0) bool = false;
  }

  return answer;
};

// console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 14
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
); // 15

// 매개변수
// m : 2 이상 30 이하인 자연수
// n : 2 이상 30 이하인 자연수
// board : 길이 n인 문자열 m개 배열 (2 <= m, n <= 30)

// 출력
// 지워지는 블록이 모두 몇개인지 반환하는 문제

// 문제 설명 및 해결
// 높이 m, 폭 n의 판과 배치 정보 board가 있을 때, 같은 블록이 2x2 형태로 4개가 붙어있을 경우 지워지는 블록이 있다.
// 같은 블록은 여러 2×2에 포함될 수 있으며, 지워지는 조건에 만족하는 2×2 모양이 여러 개 있다면 한꺼번에 지워진다.
// 블록이 지워진 후 위에 있는 블록이 아래로 떨어져 빈 공간을 채우게 된다.
// 만약 빈 공간을 채운 후에 다시 2×2 형태로 같은 모양의 블록이 모이면 다시 지워지고 떨어지고를 반복하게 된다.
// 먼저, answer와 boardArr, bool을 선언한다.
// boarArr은 board를 2차원 배열로 만든 것이고, bool값은 while문을 순회하기 위한 boolean값, answer는 제거된 블록 개수를 저장한다.
// while문을 순회하면서, 먼저 이중 for문으로 2x2 블록을 찾아서 removed 배열에 넣어준다.
// removed 배열을 순회하면서 2x2 블록을 지워준다.
// 이후에 2x2 블록들을 제거한 뒤의 boardArr를 만들어주고 다시 while문을 반복한다.
// 만약 2x2 동일한 블록이 없어서 removed 배열의 길이가 0이면, bool = false로 while문을 탈출한다.
// 최종적으로 제거된 블록의 개수 answer를 반환한다.

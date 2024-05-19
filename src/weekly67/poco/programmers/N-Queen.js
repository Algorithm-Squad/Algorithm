// https://school.programmers.co.kr/learn/courses/30/lessons/12952

const solution = (n) => {
  const board = new Array(n).fill(-1); // 인덱스는 열, 해당 인덱스에 저장되는 값은 행으로 저장하는 배열
  let answer = 0;

  // 퀸을 놓을 수 있는지 확인하는 함수
  const checkIsPossible = (row, col, board) => {
    for (let i = 0; i < row; i++) {
      // 대각선에 위치한다는 의미는 현재 row, col과 목표 지점인 i, board[i]의 x, y 좌표의 차이가 같다는 의미이다.
      if (board[i] === col || Math.abs(i - row) === Math.abs(board[i] - col))
        return false;
    }

    return true;
  };

  const dfs = (row, board) => {
    // n번째 행까지 dfs를 호출했다면 마지막 n번째 행에도 퀸을 놓았다는 의미이므로 경우의 수를 1 증가시킨다.
    if (row === n) {
      answer++;
      return;
    }

    // 0 ~ n-1까지 반복하면서 퀸을 놓을 수 있는지 확인하고 놓을 수 있다면 다음 행으로 이동하여 재귀적으로 호출한다.
    for (let i = 0; i < n; i++) {
      if (checkIsPossible(row, i, board)) {
        board[row] = i;
        dfs(row + 1, board);
      }
    }
  };

  // 0행부터 시작
  dfs(0, board);
  return answer;
};

console.log(solution(4)); // 2

// 매개변수
// n : 체스판의 가로, 세로 길이 및 퀸의 수

// 출력
// n개의 퀸을 서로 공격할 수 없게 놓는 경우의 수

// 문제 설명 및 해결
// n x n 크기의 체스판에 n개의 퀸을 서로 공격할 수 없게 놓는 경우의 수를 구하는 문제이다.
// 퀸은 가로, 세로, 대각선으로 이동할 수 있다.
// 즉, 한 행에는 하나의 퀸만 놓을 수 있고, 한 열에도 하나의 퀸만 놓을 수 있다.
// 대각선 방향으로 이동할 때는 x, y 좌표의 차이가 같은 경우에만 이동할 수 있다.
// 이 문제는 DFS를 이용하여 풀 수 있다.
// DFS를 이용하여 퀸을 놓을 수 있는지 확인하고 놓을 수 있다면 다음 행으로 이동하여 재귀적으로 호출한다.
// 만약 n개의 퀸을 모두 놓았다면 경우의 수를 1 증가시킨다.
// 이렇게 모든 경우의 수를 구한 후에 경우의 수를 return 하면 된다.

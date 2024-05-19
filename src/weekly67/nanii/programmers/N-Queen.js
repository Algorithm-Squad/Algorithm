/**
 * N-Queen / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12952
 * @param {*} n 체스판 가로, 세로 길이
 * @returns n개의 퀸이 서로 공격할 수 없도록 배치하는 경우의 수 (배치시킬 수 있는 방법의 수)
 * 퀸은 가로, 세로, 대각선으로 이동 가능
 * n은 12이하 자연수
 */
function solution(n) {
  let answer = 0;
  let queens = [];

  const dfs = (row) => {
    if (row === n) {
      answer++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!isPossible(row, i, queens)) continue;
      queens.push([row, i]);
      dfs(row + 1);
      queens.pop();
    }
  };

  dfs(0);

  return answer;
}

const isPossible = (x, y, queens) => {
  for (const [a, b] of queens) {
    if (a === x || b === y || Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
};

console.log(solution(4));

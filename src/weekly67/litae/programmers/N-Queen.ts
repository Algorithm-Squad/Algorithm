export function solution(n: number) {
  const board: number[] = new Array(n).fill(-1);
  let answer = 0;

  const isPossible = (board: number[], col: number, row: number) => {
    for (let i = 0; i < col; i++) {
      if (board[i] === row) return false;
      if (Math.abs(col - i) === Math.abs(row - board[i])) return false;
    }

    return true;
  };

  const dfs = (col: number, board: number[]) => {
    const temp = [...board];
    if (col === n) {
      answer++;

      return;
    }

    for (let row = 0; row < n; row++) {
      if (isPossible(temp, col, row)) {
        temp[col] = row;
        dfs(col + 1, [...temp]);
      }
    }
  };

  dfs(0, board);

  return answer;
}

// 대각선 체크
// 두 퀸의 행 길이(절대값), 열 길이(절대값)가 동일하다면 대각선에 위치

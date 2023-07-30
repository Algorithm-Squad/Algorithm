// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= rowLength ||
      col < 0 ||
      col >= colLength ||
      grid[row][col] === 0
    ) {
      return 0;
    }

    grid[row][col] = 0;

    let area = 1;

    area += dfs(row - 1, col);
    area += dfs(row + 1, col);
    area += dfs(row, col - 1);
    area += dfs(row, col + 1);

    return area;
  };

  let answer = 0;

  const rowLength = grid.length; // 행의 길이
  const colLength = grid[0].length; // 열의 길이

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (grid[row][col] === 1) {
        answer = Math.max(answer, dfs(row, col));
      }
    }
  }

  return answer;
};

// 매개변수
// grid: 2차원 배열

// 출력
// number: 가장 큰 섬의 넓이

// 문제 설명 및 해결
// 2차원 배열 grid가 주어지고, 숫자 1은 땅, 숫자 0은 물을 의미한다.
// 숫자 1이 연결된 부분은 하나의 섬이라고 할때, 주어진 2차원 배열에 존재하는 가장 큰 섬의 면적을 반환하는 문제.
// 먼저 주어진 2차원 배열 grid의 행과 열의 길이를 구하고, 2중 for문을 통해 순회하면서 1을 찾는다.
// 만약 1을 찾으면 dfs를 호출한다.
// dfs 함수 내부에서는 만약 row 혹은 col이 0보다 작거나, row가 행의 길이보다 크거나, col이 열의 길이보다 크거나, grid[row][col]이 0이면 0을 반환한다.
// row 혹은 col이 0보다 작거나, row가 행의 길이보다 크거나, col이 열의 길이보다 큰 경우는 주어진 2차원 배열을 넘어서는 탐색이기 때문이고
// grid[row][col]이 0인 경우는 물이기 때문에 0을 반환한다.
// 만약 위의 조건에 해당하지 않는 경우, 현재 row, col 위치를 기준으로 상하좌우의 row, col 값을 다시 dfs로 계산한다.
// 처음 dfs의 return 값은 1이고 상하좌우 주위의 dfs 결과 값을 더해서 섬의 면적을 반환한다.
// dfs의 최종 반환값은 기존 answer와 비교해서 큰 수를 answer에 저장한다.

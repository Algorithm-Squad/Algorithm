// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = (grid) => {
  let countOfIslands = 0;
  const row = grid.length;
  const col = grid[0].length;

  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      if (grid[y][x] === '1') {
        countOfIslands++;
        grid[y][x] = '0';
        DFS(y, x, grid);
      }
    }
  }
  return countOfIslands;
};

const DFS = (y, x, grid) => {
  const newYX = [
    [y + 0, x - 1],
    [y - 1, x + 0],
    [y + 1, x + 0],
    [y + 0, x + 1],
  ];

  newYX.forEach(([newY, newX]) => {
    if (
      newX >= 0 &&
      newX < grid[0].length &&
      newY >= 0 &&
      newY < grid.length &&
      grid[newY][newX] === '1'
    ) {
      grid[newY][newX] = '0';
      DFS(newY, newX, grid);
    }
  });

  return;
};

// 문제 설명 및 해결
// '0'과 '1'로 이루어진 2차원 배열이 매개변수로 주어졌을 때, '0'은 물, '1'은 땅을 뜻한다.
// 섬은 땅이 상하좌우로 이어져있는 경우 연결된 것으로 판단한다(대각선은 제외)
// 이때, 주어진 2차원 배열에서의 섬의 갯수를 구하는 문제
// 먼저 주어진 2차원 배열을 탐색하면서 해당 좌표의 값이 "1" 인 경우, count를 1씩 올려주고
// 해당 좌표의 값을 0으로 만들고, 해당 좌표의 상하좌우 위치를 탐색한다.
// 이때 상하좌우 좌표 중 값이 "1"인 경우에는 해당 좌표의 값을 "0"으로 바꾸고, 이전 좌표 값의 상하좌우 탐색을 멈추고
// 같은 방법으로 현재 좌표의 상하좌우를 탐색한다(DFS)
// 최종적으로 DFS의 return의 조건은 해당 좌표를 기준으로 더이상 상하좌우에 연결된 땅 즉, "1" 값이 없는 경우이다.
// 시간복잡도 O(n^2) 이상, 105ms
// 공간복잡도 51.4 MB

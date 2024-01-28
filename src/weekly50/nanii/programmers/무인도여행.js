/**
 * 무인도 여행 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/154540
 * @param {*} maps 각 섬의 식량을 표시한 배열
 * @returns 각 섬마다 최대 머무를 수 있는 기간을 오름차순으로 정렬한 배열 없으면 -1
 */
function solution(maps) {
  const answer = [];

  const row = maps[0].length;
  const col = maps.length;

  maps = maps.map((m) => m.split('')); // 2차원 배열로 변환

  const dfs = (x, y) => {
    // maps를 순회하면서 "X"가 아닐 때 방문처리,  상하좌우 "X"가 아닌 값의 합을 더함
    if (x < 0 || y < 0 || x >= col || y >= row || maps[x][y] === 'X') return 0; // 더하지 않는 조건

    const cur = Number(maps[x][y]);
    maps[x][y] = 'X'; // 중복 계산 방지

    return cur + dfs(x - 1, y) + dfs(x, y - 1) + dfs(x + 1, y) + dfs(x, y + 1);
  };

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      const cur = maps[i][j];
      if (cur !== 'X') {
        answer.push(dfs(i, j));
      }
    }
  }

  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

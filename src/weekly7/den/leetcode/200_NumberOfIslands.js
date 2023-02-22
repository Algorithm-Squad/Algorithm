/*
문제출처: https://leetcode.com/problems/number-of-islands/
시작: 21:45
종료: 첫 시도에 못 풀고 생각날 때마다 보고 고민하다가 결국 풀었습니다. 
-> 결국엔 하드코딩... 결과는 통과

시간복잡도: 11.28% (forEach + DFS)
공간복잡도: 43.97%
*/

var numIslands = function(grid) {
  let islands = 0;
  // 좌표 방문 여부를 확인하기 위해 객체 사용
  // 예) [0,1], [3,2] 방문했다면, {0: [1], 3: [2]}
  let visited = {0: []};

  // grid의 요소들을 forEach와 재귀를 이용해서 탐색
  grid.forEach((array, x) => {
    // "1"(섬)을 찾는 함수, 매개변수: X좌표, Y좌표, level(DFS 탐색 깊이)
    function findIsland(x, y, level){
      // 방문한 적이 없는 x좌표일 경우 visited 객체에 추가 
      if(!visited[x]) visited[x] = [];
      // 재귀 종료조건 1: x, y좌표가 grid를 벗어나는 경우
      if(x < 0 || y < 0 || y > array.length || x === grid.length) return;
      // 재귀 종료조건 2: dfs 탐색 중 방문한적 있는 좌표일 경우
      if(visited[x].includes(y) && level != 0) return;
      // 재귀 종료조건 3: dfs 탐색 중 좌표의 값이 0일때, 방문 기록하고 return
      if(grid[x][y] === "0" && level != 0) {
        visited[x].push(y);
        return;
      }
      // 만약 좌표의 값이 섬이고, 방문한적이 없다면, 
      if(grid[x][y] === "1" && !visited[x].includes(y)) {
        // dfs 탐색의 시작점일 때 섬의 개수 1 추가
        if(level === 0) islands += 1;
        // 좌표 방문 기록
        visited[x].push(y);
        // 좌표 기준 상하좌우 dfs 탐색
        findIsland(x + 1, y, level + 1);
        findIsland(x - 1, y, level + 1);
        findIsland(x, y + 1, level + 1);
        findIsland(x, y - 1, level + 1);
        // 재귀 종료조건 4: 상하좌우 dfs 탐색 끝나면 섬의 모든 좌표를 탐색한 후이기 때문에 return
        if(level != 0) return;
      }
      // grid의 x축 기준으로 x축 상 모든 좌표 순차적으로 dfs 탐색
      findIsland(x, y + 1, 0);
    }
    // grid의 좌측 상단 부터 탐색 시작
    findIsland(x, 0, 0);
  })
  // dfs 탐색이 끝나면 섬의 개수 반환
  return islands;
};

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]));  // 1


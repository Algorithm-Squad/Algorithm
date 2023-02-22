/**
 * 게임맵 최단거리 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/1844
 * 문제해석 : 최단거리 => Bfs : 시작을 큐에 넣고 방문처리하는 방법사용. 더이상 꺼낼 큐가 없을 때 종료
 * dx = [-1, 0, +1, 0] //위, 오, 아, 왼
 * dy = [0, +1, 0, -1]
 *
 *
 * @param {*} maps
 * @returns
 */
function solution(maps) {
  let visitQ = [[0,0]];

  const dir = [[-1,0], [0,1], [1,0], [0,-1]]; //위, 오, 아, 왼
  const row = maps.length;
  const col = maps[0].length;

  maps[0][0] += 1; //시작위치에 방문했다는 표시로 +1 증가시킴

  while(visitQ.length) {
    const [x, y] = visitQ.shift();

    for(let i = 0; i < dir.length; i ++) {
      let mx = x + dir[i][0];
      let my = y + dir[i][1];
      if(mx < 0 || my < 0 || mx >= row || my >= col) continue; //다음 방향으로 넘어감
      if(mx >= 0 && my >= 0 && mx < row && my < col && maps[mx][my] === 1) {
        visitQ.push([mx, my]);
        maps[mx][my] = maps[x][y] + 1;
      }
    }
  }
  // console.log(maps);
  return maps[row - 1][col - 1] === 1 ? - 1 : maps[row - 1][col - 1] - 1;
}

// const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]; //11
// const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]; //-1
console.log(solution(maps));
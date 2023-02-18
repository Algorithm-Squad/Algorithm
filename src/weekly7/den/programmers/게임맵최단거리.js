/*
문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/1844
시작: 16:50
종료: 18:20

결과: 통과
*/

function solution(maps) {
  // map의 가로, 세로 길이
  const xLen = maps[0].length;
  const yLen = maps.length;
  // 도착 지점 좌표
  const goalX = xLen - 1;
  const goalY = yLen - 1;
  // 상하좌우 이동할 때 이용하기 위한 배열
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  
  // BFS 사용시 이용할 queue 생성, 초기 위치 [0,0,1] 넣어놓기.
  const queue = [[0, 0, 1]];
  
  // 큐의 길이가 0이 될 때 까지 BFS 진행
  while(queue.length) {
    // 큐에서 현재 위치 빼오기
    const [X, Y, count] = queue.shift();
    // 반복문 종료 조건: 목표지점에 도착하면, 이동한 칸 수 반환
    if(X === goalX && Y === goalY) return count;
    
    // 현재 위치 기준 for문을 이용해 상, 하, 좌, 우로 이동했을 때의 좌표를 구한다.
    for(let i = 0; i < 4; i++) {
      const nx = X + dx[i];
      const ny = Y + dy[i];

      // 이동 후 x,y 좌표가 0보다 크고, maps를 벗어나지 않고, 해당 위치의 값이 1(이동 가능)일 때
      // 해당 좌표와 count를 1 더해서 queue에 넣는다.
      // 그리고 해당 좌표를 방문했다는 것을 표시하기 위해 해당 위치 값을 0으로 바꾼다.
      if(nx >= 0 && nx < xLen && ny >= 0 && ny < yLen && maps[nx][ny] === 1) {
        queue.push([nx, ny, count + 1]);
        maps[nx][ny] = 0;
      }
    }
  }
  
  // 목표 위치에 도달하지 못하면 -1 반환
  return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])); // 11
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]])); // -1

// https://school.programmers.co.kr/learn/courses/30/lessons/169199

const solution = (board) => {
  let answer = -1;

  // board를 2차원 배열로 변환
  const map = board.map((item) => item.split(''));

  // n: 행, m: 열
  const n = map.length;
  const m = map[0].length;

  // 방문한 곳을 체크하기 위한 2차원 배열 -> 0으로 초기화
  const visited = new Array(n).fill().map((_) => new Array(m).fill(0));

  // 상, 하, 좌, 우
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  // 처음 로봇이 위치한 시작 지점 찾기
  let sx, sy;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (map[x][y] === 'R') {
        sx = x;
        sy = y;
        break;
      }
    }
  }

  // queue에 시작지점과 이동횟수 count를 함께 넣어준다
  const queue = [[sx, sy, 0]];
  // 시작지점 방문 처리
  visited[sx][sy] = 1;

  while (queue.length) {
    const [x, y, count] = queue.shift();

    // 만약 다음 도착지점이 목표지점이라면 이동횟수를 반환
    if (map[x][y] === 'G') {
      answer = count;
      break;
    }

    // 상, 하, 좌, 우로 이동
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 미끄러지기 (한방향으로)
      while (0 <= nx && nx < n && 0 <= ny && ny < m && map[nx][ny] !== 'D') {
        nx += dx[i];
        ny += dy[i];
      }

      // 장애물에 부딪히거나 맵의 맨끝에 부딪혔다면 부딪히기 바로 직전 좌표로 이동시킨다
      nx -= dx[i];
      ny -= dy[i];

      // 만약 새로운 좌표가 방문하지 않은 곳이라면
      // 새로운 좌표와 count에 1을 증가하여 queue에 넣어주고 방문처리를 한다
      if (visited[nx][ny] === 0) {
        queue.push([nx, ny, count + 1]);
        visited[nx][ny] = 1;
      }
    }
  }

  return answer;
};

console.log(solution(['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....'])); // 7
// console.log(solution(['.D.R', '....', '.G..', '...D'])); // -1

'...D..R', '.D.G...', '....D.D', 'D....D.', '..D....';

// 매개변수
// board : 게임판의 상태를 나타내는 문자엷 배열

// 출력
// 말이 목표위치에 도달하는데 최소 몇 번 이동해야 하는지 return

// 문제 설명 및 해결
// 말의 움직임은 상, 하, 좌, 우 4방향 중 하나를 선택해서 게임판 위의 장애물이나
// 맨 끝에 부딪힐 때까지 미끄러져 이동하는 것을 한 번의 이동으로 친다.
// "."은 빈 공간을, "R"은 로봇의 처음 위치를, "D"는 장애물의 위치를, "G"는 목표지점을 나타낸다.
// 말이 목표위치에 도달하는데 최소 몇 번 이동해야 하는지 반환하는 문제다.
// 만약 목표위치에 도달을 할 수 없다면 -1을 반환하다.
// bfs를 활용하여 문제를 해결했다.
// 먼저 board를 가지고 2차원 배열로 map을 만들고 추가로 방문한 지점을 체크하기 위한 2차원 배열 visited를 만든다.
// map을 순회하면 현재 로봇이 위치한 시작점을 찾고 queue에 해당 좌표와 카운트 0을 넣어준다.
// queue를 순회하면서 목표지점 G에 도달하면 카운트를 반환하고 종료한다.

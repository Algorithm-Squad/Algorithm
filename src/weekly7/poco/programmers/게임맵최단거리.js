// https://school.programmers.co.kr/learn/courses/30/lessons/1844

const solution = (maps) => {
  let answer = 1;
  const visited = maps;
  const row = maps.length;
  const col = maps[0].length;
  const queue = [];

  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [y, x] = queue.shift();
      const dx = [-1, 1, 0, 0];
      const dy = [0, 0, -1, 1];

      const newYX = [
        [y + 0, x - 1],
        [y - 1, x + 0],
        [y + 1, x + 0],
        [y + 0, x + 1],
      ];

      for (let j = 0; j < newYX.length; j++) {
        const newX = x + dx[j];
        const newY = y + dy[j];

        if (newX >= 0 && newX < col && newY >= 0 && newY < row && visited[newY][newX] === 1) {
          if (newX === col - 1 && newY === row - 1) {
            return ++answer;
          }

          queue.push([newY, newX]);
          visited[newY][newX] = 0;
        }
      }
    }
    answer++;
  }
  return -1;
};

// 문제 설명 및 해결
// 5x5 크기의 2차원 배열이 주어지고, 현재 캐릭터의 위치는 배열의 [0,0]에 위치해있다.
// 목적지는 배열의 [4,4]에 위치해있다고 가정했을 때, 최단거리로 목적지에 도착하는 이동 횟수를 구하는 문제

// BFS 사용 문제로 queue를 사용해서 현재 좌표의 상하좌우 중에 이동할 수 있는 곳을 queue에 넣고
// queue의 맨 앞에서부터 하나씩 좌표를 꺼내서 상하좌우를 탐색하고 이동하는 로직 사용
// 이동중에 목적지를 만난 경우 이동횟수에 전위연산으로 +를 해주고 이동횟수를 return한다.
// queue가 비어있는 상태에서 목적지에 도착하지 못한 경우, 목적지에 갈수 있는 경로는 없으므로, -1을 반환한다.

// 시간초과...

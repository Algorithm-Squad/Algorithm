// https://school.programmers.co.kr/learn/courses/30/lessons/12978

const getGraph = (N, road) => {
  const graph = Array.from({ length: N }, () => Array(N).fill(Infinity));

  // 하나의 노드에서 다른 노드로 가는 거리를 저장
  // 간선이 두 개 이상일 수 있기 때문에 가장 짧은 거리만 저장
  road.forEach((e) => {
    const [from, to, dist] = e;
    graph[from - 1][to - 1] =
      graph[from - 1][to - 1] > dist ? dist : graph[from - 1][to - 1];
    graph[to - 1][from - 1] =
      graph[to - 1][from - 1] > dist ? dist : graph[to - 1][from - 1];
  });

  return graph;
};

// 1번 노드를 기준으로 각 노드까지의 최단 거리를 구하는 함수
// 방문하지 않은 노드 중 1번 노드 기준 가장 짧은 거리를 가진 노드의 인덱스를 반환
const findShortestPathNode = (distance, visited) => {
  let minDist = Infinity;
  let minIdx = 0;
  for (let i = 0; i < distance.length; i++) {
    if (visited[i]) continue;
    if (distance[i] < minDist) {
      minDist = distance[i];
      minIdx = i;
    }
  }
  return minIdx;
};

const solution = (N, road, K) => {
  const graph = getGraph(N, road);
  const visited = Array(N).fill(false);
  const distance = visited.map((_, i) => graph[0][i]);
  // 1번 노드에서 본인까지의 거리는 0으로 설정
  distance[0] = 0;
  // 1번 노드는 방문한 것으로 처리
  visited[0] = true;

  for (let i = 0; i < N; i++) {
    // 1번 노드를 기준으로 방문하지 않은 노드 중 가장 거리가 짧은 노드 선택
    const nextNode = findShortestPathNode(distance, visited);
    // 방문 처리
    visited[nextNode] = true;
    for (let j = 0; j < N; j++) {
      // 이미 방문한 노드는 건너뛰기
      if (visited[j]) continue;
      // distance(1번 노드 기준 거리 테이블)에서 1번 노드 기준으로 j(실제로는 j + 1)번째 노드 방문의 길이가
      // nextNode에서 j(실제로는 j + 1)번째  가장 작은 값을 가진 노드를 기준으로 다음 노드까지의 거리가 더 작다면
      // 가장 짧은 거리를 갱신
      if (distance[j] > distance[nextNode] + graph[nextNode][j])
        distance[j] = distance[nextNode] + graph[nextNode][j];
    }
  }

  return distance.filter((e) => e <= K).length;
};

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
); // 4

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); // 4

// 매개변수
// N : 마을의 개수
// road : 각 마을을 연결하는 도로의 정보가 담긴 2차원 배열
// K : 음식 배달이 가능한 시간 K

// 출력
// 음식 배달이 가능한 시간 K 이하로 배달이 가능한 마을의 개수

// 문제 설명 및 해결
// 마을의 개수 N, 각 마을을 연결하는 도로의 정보가 담긴 2차원 배열 road, 음식 배달이 가능한 시간 K가 주어진다.
// 음식 배달이 가능한 시간 K 이하로 배달이 가능한 마을의 개수를 구하는 문제이다.
// 다익스트라 알고리즘을 사용하여 문제를 해결할 수 있다.
// 다익스트라 알고리즘이란, 하나의 정점에서 다른 모든 정점으로 가는 최단 경로를 구할 때 활용할 수 있는 알고리즘이다.
// 현재까지 알고 있던 최단 경로를 계속해서 갱신하며 최단 경로를 구하는 방식이다.
// 방문하지 않은 노드 중 거리 값이 가장 작은 노드를 탐색 노드로 선택한다.
// 노드를 찾는 방식은 거리 테이블의 앞에서부터 찾아내야 하기 때문에 시간복잡도는 O(N^2)이다.
// 주어진 N과 road 배열로 그래프를 생성한다.
// 그래프를 생성한 후, 1번 노드를 기준으로 방문하지 않은 노드 중 가장 짧은 거리를 가진 노드의 인덱스를 반환하는 함수를 생성한다.
// for문을 사용하여 방문하지 않은 노드 중 가장 짧은 거리를 가진 노드를 찾는다.
// 방문하지 않은 노드 중 가장 짧은 거리를 가진 노드를 찾았다면, 해당 노드를 방문 처리한다.
// 해당 노드를 기준으로 for문을 사용하여 방문하지 않은 노드 중 기존의 1번 노드 기준으로 거리와 비교하여 더 작은 거리를 저장한다.
// 모든 계산을 마친 후 1번 노드를 기준으로 각 노드까지의 최단 거리를 기록한 distance 배열에서 K 이하인 값의 개수를 반환한다.

// BFS를 활용한 방식
// graph를 만들고, 1번 노드에서 출발해서 각 노드까지의 최단 거리를 구한다.
// 1번 노드부터 queue에 넣고, queue에서 노드를 꺼내면서 해당 노드와 연결된 노드들을 queue에 넣는다.
// 이때, 연결된 노드들의 거리를 갱신하고, 기존의 거리보다 작을때만 queue에 넣는다.
// queue가 빌 때까지 반복하고, 거리가 K 이하인 노드의 개수를 반환한다.

// const getGraph = (N, road) => {
//   const graph = Array.from({ length: N }, () => []);

//   road.forEach((e) => {
//     const [from, to, dist] = e;

//     let isExistPath = graph[from - 1].find((e) => e.to === to - 1);
//     if (!isExistPath) {
//       graph[from - 1].push({ to: to - 1, dist: dist });
//     } else if (isExistPath.dist > dist) {
//       isExistPath.dist = dist;
//     }

//     isExistPath = graph[to - 1].find((e) => e.to === from - 1);
//     if (!isExistPath) {
//       graph[to - 1].push({ to: from - 1, dist: dist });
//     } else if (isExistPath.dist > dist) {
//       isExistPath.dist = dist;
//     }
//   });

//   return graph;
// };

// const solution = (N, road, K) => {
//   const graph = getGraph(N, road);

//   // 1번 노드와 각 노드까지 최단 경로를 저장하는 배열
//   const dist = Array(graph.length).fill(Infinity);

//   // 큐 생성 및 1번(0번째 index) 노드에 대한 정보 저장
//   const queue = [{ to: 0, dist: 0 }];

//   // 1번 노드의 거리(본인과 본인거리)는 0 으로 설정
//   dist[0] = 0;

//   // 큐가 빌 때까지 반복
//   while (queue.length) {
//     // 큐에서 방문할 노드 꺼내기
//     const { to } = queue.shift();

//     // 방문한 노드까지 이동한 거리 + 다음 방문 노드까지 거리를
//     // 기존에 저장된 값과 비교해서 갱신
//     graph[to].forEach((next) => {
//       const acc = dist[to] + next.dist;
//       if (dist[next.to] > acc) {
//         dist[next.to] = acc;
//         // 최단 경로가 되는 노드는 큐에 추가
//         queue.push(next);
//       }
//       // 만약 acc가 dist[next.to]보다 크다면
//       // 이미 최단 경로가 아니기 때문에 큐에 추가하지 않는다.
//     });
//   }

//   return dist.filter((e) => e <= K).length;
// };

// console.log(
//   solution(
//     5,
//     [
//       [1, 2, 1],
//       [2, 3, 3],
//       [5, 2, 2],
//       [1, 4, 2],
//       [5, 3, 1],
//       [5, 4, 2],
//     ],
//     3
//   )
// );

// console.log(
//   solution(
//     6,
//     [
//       [1, 2, 1],
//       [1, 3, 2],
//       [2, 3, 2],
//       [3, 4, 3],
//       [3, 5, 2],
//       [3, 5, 3],
//       [5, 6, 1],
//     ],
//     4
//   )
// );

// https://school.programmers.co.kr/learn/courses/30/lessons/258711

function solution(edges) {
  const getNodesInfo = (edges) => {
    const nodesInfo = new Map();

    // edges를 순회하며 각 정점은 나가는 간선의 개수, 받는 간선의 개수를 계산한다.
    // { 2 => [2, 0]} 인 경우에, 정점 2는 나가는 간선이 2개이고, 받는 간선이 0개이다.
    edges.forEach((edge) => {
      const [from, to] = edge;
      if (nodesInfo.has(from)) {
        const [give, receive] = nodesInfo.get(from);
        nodesInfo.set(from, [give + 1, receive]);
      } else {
        nodesInfo.set(from, [1, 0]);
      }

      if (nodesInfo.has(to)) {
        const [give, receive] = nodesInfo.get(to);
        nodesInfo.set(to, [give, receive + 1]);
      } else {
        nodesInfo.set(to, [0, 1]);
      }
    });

    return nodesInfo;
  };

  const checkNodesInfo = (nodesInfo) => {
    const answer = new Array(4).fill(0);
    for (const [key, io] of nodesInfo) {
      const [give, receive] = io;
      // 새로 생성된 쟁점은 나가는 간선의 개수가 2 이상이며, 받는 간선의 개수는 0이다.
      if (2 <= give && receive == 0) {
        answer[0] = key;
      }
      // 막대그래프 최상단은 나가는 간선의 개수는 0인 정점이다.
      // 따라서, 나가는 간선의 개수가 0인 경우에는 막대 그래프의 최상단이며 곤 막대그래프의 개수가 된다.
      else if (give == 0) {
        answer[2]++;
      }
      // 나가는 간선의 개수가 2 이상이며, 받는 간선의 개수가 2 이상인 경우에는 8자 그래프의
      // 가운데 정점이다. 따라서, 8자 그래프의 개수가 된다.
      else if (give >= 2 && receive >= 2) {
        answer[3]++;
      }
    }
    // 도넛 그래프는 사이클이 이루어진다는 것 밖에 없기 때문에 개수 계산으로 판별할 수 없다.
    // 생성 정점은 기존에 존재하던 모든 그래프에 간선을 하나 씩 연결한다.
    // 따라서, 생성 정점의 나가는 간선 개수에서 막대, 8자 그래프 개수를 빼면 도넛 그래프 개수가 나온다.
    answer[1] = nodesInfo.get(answer[0])[0] - answer[2] - answer[3];
    return answer;
  };

  const nodesInfo = getNodesInfo(edges);
  const answer = checkNodesInfo(nodesInfo);
  return answer;
}

console.log(
  solution([
    [2, 3],
    [4, 3],
    [1, 1],
    [2, 1],
  ])
);

// 매개변수
// edges : 간선의 정보를 담은 2차원 배열

// 출력
// 생성한 정점의 번호, 도넛 모양 그래프의 수, 막대 모양 그래프의 수, 8자 모양 그래프의 수를 순서대로 1차원 정수 배열

// 문제 해결 및 설명
// 문제해결은 각 정점의 나가는 간선과 받는 간선의 개수를 구하여 조건식으로 그래프의 모양을 판단할 수 있다.
// 먼저, edges 배열을 순회하여 각 정점(node)의 나가는 간선과 받는 간선의 개수를 갖는 Map 객체를 생성한다.(getNodesInfo 함수)
// 다음으로 각 정점(node)의 정보를 담은 Map 객체를 순회하면서 그래프의 모양을 판단한다.(checkNodesInfo 함수)
// 먼저 문제에서 도넛, 막대, 8자 모양 그래프의 총 개수는 2개 이상이기 때문에, 나가는 간선의 개수가 2 이상이며, 받는 간선의 개수가 0인 정점은
// 새로 생성된 정점이다.
// 나가는 간선의 개수가 0인 경우에는, 막대 그래프의 최상단이며 막대 그래프의 개수가 된다.
// 나가는 간선의 개수가 2 이상이며, 받는 간선의 개수가 2 이상인 경우에는 8자 그래프의 가운데 정점이며 8자 그래프의 개수가 된다.
// 마지막으로 도넛 모양의 그래프 수의 개수는 다른 그래프처럼 간선의 개수 조건으로 판단할 수 없기 때문에,
// 생성된 정점의 나가는 간선에서 막대 모양, 8자 모양 그래프의 개수를 뺀 수가 도넛 모양 그래프의 개수가 된다.

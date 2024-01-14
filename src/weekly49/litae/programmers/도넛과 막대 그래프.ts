// 각 노드별 보낸 횟수와 받은 횟수를 객체로 반환하는 함수
function countNode(edges: number[][]) {
  const result = {};

  edges.forEach(([send, receive]) => {
    // 출발, 도착 노드가 없는 경우 초기화
    result[send] ||= { sendCount: 0, receiveCount: 0 };
    result[receive] ||= { sendCount: 0, receiveCount: 0 };

    // 출발, 도착 노드가 있을때마다 각 카운트를 플러스
    result[send].sendCount++;
    result[receive].receiveCount++;
  });

  return result;
}

export function solution(edges: number[][]): number[] {
  const nodeInfo = countNode(edges);
  let start = 0;
  let numberOfGraphs = 0;
  let donut = 0;
  let bar = 0;
  let eight = 0;

  for (let node in nodeInfo) {
    const { sendCount, receiveCount } = nodeInfo[node];

    // 2개 이상의 다른 노드에 보내고 아무것도 받지 않는 노드는 생성 정점
    if (sendCount >= 2 && receiveCount === 0) {
      start = parseInt(node);
      numberOfGraphs = sendCount;
    }

    // 다른 노드로 아무것도 보내지 않는 노드는 막대 그래프(막대 그래프의 마지막 노드는 더이상 연결되지 않고 끊김)
    if (sendCount == 0) bar++;

    // 2개 이상 노드로부터 받고 2개 이상의 노드로 보내는 노드는 8자 모양 그래프의 중앙 노드
    if (sendCount >= 2 && receiveCount >= 2) eight++;
  }

  // 도넛 그래프는 모든 그래프 개수에서 막대 그래프와 8자 모양 그래프 개수를 뺀 값이 된다
  donut = numberOfGraphs - bar - eight;

  return [start, donut, bar, eight];
}

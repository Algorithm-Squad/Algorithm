// https://school.programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let trucks = truck_weights;
  let maxWeight = weight;
  let currentWeight = 0;
  let bridgeQueue = Array.from({ length: bridge_length }, () => 0);

  answer += 1;
  currentWeight += trucks[0];
  maxWeight -= trucks[0];
  bridgeQueue.shift();
  bridgeQueue.push(trucks.shift());

  while (currentWeight > 0 || trucks.length > 0) {
    let nextTruck = trucks[0];
    let finish = bridgeQueue[0];

    answer += 1;
    maxWeight += finish;
    currentWeight -= finish;
    bridgeQueue.shift();

    if (maxWeight >= nextTruck) {
      maxWeight -= nextTruck;
      currentWeight += nextTruck;
      bridgeQueue.push(trucks.shift());
    } else {
      bridgeQueue.push(0);
    }
  }

  return answer;
}

// 문제 설명 및 해결
// 매개변수
// bridge_length : 다리에 올라갈 수 있는 트럭 수
// weight : 다리가 버틸 수 있는 최대 중량
// truck_weight : 각 트럭의 무게(배열)
// 각 트럭은 배열의 순서대로 다리를 건널 때, 전체 트럭이 다리를 건널 때 걸리는 시간을 구하는 문제
// 큐를 이용해서 문제를 해결하고자 하였고, 다리 위의 현재 중량과 남은 트럭이 0보다 큰 경우를 조건으로
// while문을 반복하였다. while문을 반복하면서 시간을 1초씩 늘려주었고, 현재 다리위의 트럭들을 나타내는 배열
// bridgeQueue의 첫번째 트럭의 무게만큼 최대중량을 더해주고, 현재중량을 빼주고, 첫번째 트럭을 다리위에서 제거함.
// 이후 현재 다리가 버틸수 있는 최대중량이 다음 트럭의 무게보다 큰 경우, 새로운 트럭을 다리위에 추가하고 현재 중량과
// 최대 중량을 각각 다음 트럭의 무게만큼 더하고 빼주었다.
// 반대의 경우, 다리위에는 빈공간을 의미하는 0을 추가해주었다.

// 고민했던 부분
// 처음 시작시에는 현재 무게가 0이기 때문에, 첫번째 트럭을 다리 위에 올리고 시작한다.
// 시간을 1초 경과시키고, 최대 하중에서 첫번째 트럭의 무게를 빼주고 현재 하중에서 트럭의 무게를 더해준 뒤
// while문 반복을 시행하였다.(현재 중량이 0 이상 조건을 만족시키기 위해서)

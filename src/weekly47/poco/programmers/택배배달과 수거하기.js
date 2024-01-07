// https://school.programmers.co.kr/learn/courses/30/lessons/150369?language=javascript

function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  // 전체 배달 및 수거 물건의 갯수는 while문의 조건을 위해 필요하다
  let deliveriesSum = deliveries.reduce((acc, cur) => acc + cur, 0);
  let pickupsSum = pickups.reduce((acc, cur) => acc + cur, 0);

  // 거리가 먼 집부터 0 제거, 0이 아닌 집이 나오면 종료
  const deleteZero = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === 0) arr.pop();
      else return;
    }
  };

  // 배달 또는 수거 완료한 물건의 갯수 count를 반환하는 함수
  const delItemCount = (arr, cap) => {
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      // 현재 방문한 집의 물건 수량이 cap과 같거나 클때
      // cap만큼 배달 또는 수거하고, count에 cap을 더하고 종료
      // count를 반환
      if (arr[i] >= cap) {
        arr[i] -= cap;
        count += cap;
        break; // cap이 가득 찼으므로 break로 탈출
      }
      // 현재 방문한 집의 물건 수량이 cap 보다 작을때
      // cap에서 현재 방문한 집의 물건 수량을 빼고, count에 현재 방문한 집의 물건 수량을 더하고, 현재 방문한 집의 물건 수량을 0으로 변경
      if (arr[i] < cap) {
        cap -= arr[i];
        count += arr[i];
        arr[i] = 0;
        // cap이 가득차지 않았으므로 다음(앞선)집으로 이동
      }
    }
    return count;
  };

  // 배달과 수거를 모두 마칠 때까지 while문 반복
  while (deliveriesSum > 0 || pickupsSum > 0) {
    // 배달과 수거 모두 거리가 먼 집부터 0이 있으면 제거
    deleteZero(deliveries);
    deleteZero(pickups);
    // 이동해야할 거리는 배달과 수거 중 더 긴 거리 * 2(왕복)
    const distance = Math.max(deliveries.length, pickups.length) * 2;
    answer += distance;
    // 배달과 수거를 완료한 물건의 갯수를 전체 배달, 수거 물건의 갯수에서 뺀다
    deliveriesSum -= delItemCount(deliveries, cap);
    pickupsSum -= delItemCount(pickups, cap);
  }

  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));

// 매개변수
// cap : 트럭이 한 번에 실을 수 있는 재활용 택배 상자의 개수
// n : 집의 개수
// deliveries : 배달할 재활용 택배 상자의 개수를 담은 배열
// deliveries[i]는 i+1번째 집에 배달할 재활용 택배 상자의 개수를 나타냅니다.
// pickups : 수거할 빈 재활용 택배 상자의 개수를 담은 배열
// pickups[i]는 i+1번째 집에서 수거할 빈 재활용 택배 상자의 개수를 나타냅니다.

// 출력
// 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리

// 문제 설명 및 해결
// 배달할 택배들은 모두 재활용 택배 상자에 담겨 있고, 배달할 택배 상자의 개수와 수거할 빈 택배 상자의 개수를 알고 있을 때,
// 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 구하는 문제이다.
// 택배 상자의 개수가 많을 때, 트럭이 한 번에 실을 수 있는 택배 상자의 개수를 초과할 수 있다.
// 먼저 전체 배달과 수거를 해야할 물건의 갯수를 구한다.
// 전체 배달과 수거를 해야할 물건의 갯수가 0이 될 때까지 while 문을 반복한다.
// while문을 한번 실행할 때마다, 트럭이 이동하는 한번의 턴이라고 생각한다.
// 가장 먼 집부터 방문을 시작할 것이기 때문에 먼저 deleteZero 함수로 배달과 수거 배열의 뒤에서 부터(가장 먼집부터) 수량이 0인 곳을 제거하고, 0이 아닌 집을 만나면 종료한다.
// 배달과 수거 모두 먼곳에서부터 0을 제거한 뒤에 남은 배달 배열과 수거 배열의 길이 중 더 긴 길이의 * 2(왕복)이 한번의 턴에서 이동해야할 거리이므로 distance에 저장하고 answer에 더해준다.
// 다음으로 한번의 턴에서 배달과 수거 물건을 제거하기 위해 deleteItemCount 함수를 호출한다.
// deleteItemCount 함수에서는 각각 배달, 수거 배열의 뒤에서부터 for문을 돌면서 cap의 개수에 맞게 배달 또는 수거를 하고, count에 배달 또는 수거한 물건의 갯수를 더한다.
// while문의 반복을 통해서 전체 배달과 수거를 해야할 물건의 갯수가 0이 될 때까지 반복하고, answer를 반환한다.

// point는 예시 문제의 해결 방법처럼 가장 먼 집부터 방문하며, 배달과 수거를 동시에 진행하는 것이다.

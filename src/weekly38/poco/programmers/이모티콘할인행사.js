//https://school.programmers.co.kr/learn/courses/30/lessons/150368

function solution(users, emoticons) {
  // 정답 배열
  const answer = [0, 0];

  // 모든 할인율을 담은 배열
  const discount = [10, 20, 30, 40];

  // 모든 할인율의 조합을 담은 배열
  const arr = [];

  // 모든 할인율의 조합을 구하는 dfs 함수
  function dfs(emoticons, result) {
    if (emoticons.length < 1) {
      arr.push(result);
      return;
    }

    for (let i = 0; i < discount.length; i++) {
      dfs(emoticons.slice(1), [...result, [discount[i], emoticons[0]]]);
    }
  }

  dfs(emoticons, []);

  // 할인율이 적용된 이모티콘 금액
  const disAmt = (dis, price) => ((100 - dis) / 100) * price;

  arr.forEach((disArr) => {
    const accrue = [0, 0];

    // 모든 유저들의 구매기준을 순회하면서, 할인율 조합에 따른 금액을 누적
    // per : 구매기준, price : 구매금액
    users.forEach(([per, price]) => {
      // 본인 기준보다 높은 할인율의 이모티콘을 구매했을 때의 금액 합계
      let sum = 0;

      // 각각 할인율 조합에 대해, 사용자들의 구매기준을 확인
      // dis : 할인율, cost : 이모티콘 가격
      disArr.forEach(([dis, cost]) => {
        // 구매기준 이상일 때만 할인율 적용
        if (dis >= per) {
          // 할인율이 적용된 금액을 누적
          sum += disAmt(dis, cost);
        }
      });

      // 본인의 구매기준 금액보다 높거나 같은 금액을 구매했을 때, 이모티콘 플러스 가입자 수 증가
      if (sum >= price) {
        accrue[0] += 1;
      } else {
        // 이모티콘 플러스 미가입시에 이모티콘 매출액 증가
        accrue[1] += sum;
      }
    });

    // 현재 할인율 조합에서 모든 이용자의 구매기준을 모두 확인했을 때
    // 이모티콘 플러스 가입자 수가 이전 할인율 조합보다 큰 경우
    if (answer[0] < accrue[0]) {
      answer[0] = accrue[0];
      answer[1] = accrue[1];
    } // 이모티콘 플러스 가입자 수가 이전 할인율 조합과 같은 경우
    else if (answer[0] === accrue[0]) {
      // 이모티콘 매출액이 더 큰 경우
      if (answer[1] < accrue[1]) {
        answer[1] = accrue[1];
      }
    }
  });

  return answer;
}

// 매개변수
// users : 사용자 n 명의 구매기준을 담은 2차원 정수 배열
// emoticons : 이모티콘 m 개의 정가를 담은 1차원 정수 배열

// 출력
// 행사목적을 최대한으로 달성했을 때의, 이모티콘 플러스 서비스 가입 수와 이모티콘 매출액을 담은
// 1차원 정수 배열

// 문제 설명 및 해결

// n명의 사용자들에게 이모티콘 m 개를 할인해서 판다
// 할인율은 10%, 20%, 30%, 40% 중에 하나로 설정된다.

// 1. 이모티콘 플러스 서비스 가입자 수와 2. 이모티콘 판매액을 최대한으로 늘리는 것
// 1번 목표가 우선수위가 더 높다

// DFS를 활용한 문제
// DFS를 활용하여 모든 이모티콘의 할인율[10,20,30,40]이 적용되는 조합을 구한다.

// 할인율의 조합을 순회하면서, 모든 사용자들의 구매기준을 확인한다.
// 할인율이 적용된 모든 이모티콘을 구매했을 때, 구매기준 이상의 금액을 구매했으면
// 이모티콘 플러스 서비스 가입자 수를 증가시키고, 그렇지 않으면 이모티콘 매출액을 증가시킨다.
// 하나의 할인율 조합의 순회가 끝나면 이전의 answer 배열과 비교하여
// 이모티콘 플러스 서비스 가입자 수가 더 큰 경우에는 answer 배열의 이모티콘 플러스 서비스 가입자 수와 전체 금액을 갱신하고,
// 이모티콘 플러스 서비스 가입자 수가 같은 경우에는 이모티콘 매출액이 더 큰 경우에만 이모티콘 매출액을 갱신한다.

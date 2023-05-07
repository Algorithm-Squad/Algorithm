//https://school.programmers.co.kr/learn/courses/30/lessons/150368

function solution(users, emoticons) {
  const answer = [0, 0];

  const discount = [10, 20, 30, 40];
  const arr = [];

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

  const disAmt = (dis, price) => ((100 - dis) / 100) * price;

  arr.forEach((disArr) => {
    const accrue = [0, 0];

    users.forEach(([per, price]) => {
      let sum = 0;

      disArr.forEach(([dis, cost]) => {
        if (dis >= per) {
          sum += disAmt(dis, cost);
        }
      });

      if (sum >= price) {
        accrue[0] += 1;
      } else {
        accrue[1] += sum;
      }
    });

    if (answer[0] < accrue[0]) {
      answer[0] = accrue[0];
      answer[1] = accrue[1];
    } else if (answer[0] === accrue[0]) {
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
// 스스로 풀이를 해결하지 못하여 블로그를 보고 풀이를 공부!

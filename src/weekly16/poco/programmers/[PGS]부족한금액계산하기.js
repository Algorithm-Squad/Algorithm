// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let totalCount = 0;

  for (let i = 1; i <= count; i++) {
    totalCount += price * i;
  }

  const answer = totalCount - money;

  return answer < 0 ? 0 : answer;
}

// 매개변수

// price : 놀이기구 이용료
// money : 처음가지고 있던 금액
// count : 놀이기구를 이용하는 횟수

// 출력

// 놀이기구를 count 이용했을 때, 가지고 있는 money에서 얼마가 모자라는지 return

// 문제 설명 및 해결

// 놀이기구를 N번 이용하면, 원래 이용로의 N배를 내야한다.
// 총 놀이기구를 COUNT번 탄다고 했을 때, 현재 가지고 있는 money가
// 얼마나 모자라는지 return 하는 문제

// 놀이기구를 이용할 때 필요한 전체 금액과 현재 가진 금액을 비교해서 해결
// test case 4번의 경우
// 이용료보다 내가 가진 돈이 큰 경우에는 부족한 금액이 없기 때문에 0을
// return 해야하기 때문에, return 문에 조건 추가로 해결

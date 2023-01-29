// https://school.programmers.co.kr/learn/courses/30/lessons/132267

const solution = function (a, b, n) {
  let result = 0;
  let emptyBottle = n;
  if (emptyBottle < a) return 0;

  result += Math.floor(emptyBottle / a) * b;
  emptyBottle = result + (emptyBottle % a);

  return result + solution(a, b, emptyBottle);
};

// 문제설명 및 해결
// 빈병 n개를 가지고 있고, a개 만큼 b개의 새로운 콜라로 바꿔준다고 했을 때, 최종적으로 받을 수 있는 새로운 콜라 병의 갯수를 구하는 문제.
// 재귀(recursion)을 연습 및 사용하도록 문제에 접근하였고, 재귀를 종료시키기 위한 조건은 빈병이 a개보다 작을 때로 설정.
// 빈병 n개를 a개로 나누었을 때 몫에 b를 곱한만큼 새로운 병을 얻을 수 있고, 빈병 n개가 a보다 큰 경우
// 새로운 콜라를 얻는 과정을 반복하기 위해, 빈병의 갯수는 새롭게 얻는 병의 수(+ 빈병 n개가 a로 나누어떨어지지 않는 경우의 나머지)를
// 매개변수로하는 solution 함수를 호출함.

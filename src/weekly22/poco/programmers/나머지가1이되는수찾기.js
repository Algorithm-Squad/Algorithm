// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  for (i = 0; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

// 문제 설명 및 해결
// 매개변수 : 자연수 n
// 출력 : 자연수 n을 나눴을 때 나머지가 1이 되는 가장 작은 자연수

// for 루프를 이용해서 0부터 n-1일까지 순회하면서 n을 나누고 나머지가 1인 경우 return

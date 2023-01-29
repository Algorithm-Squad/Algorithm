// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} n
 * @return {number}
 */

const fib = function (n) {
  if (n === 0 || n === 1) return n;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(5));

// 문제 설명 및 해결
// 숫자 n이 주어졌을때, F(N)의 결과값은 F(N-1) + F(N-2)이다.
// F(1) = 1, F(0) = 0일때, 위의 조건을 만족하는 함수를 만드는 문제

// 피보나치 수열 문제로, 재귀적 방법을 활용하였고, 값이 주어진 F(1), F(0)을 종료조건으로 설정.
// 예를들어 F(5)를 구한다고 가정했을 때, F(5)는 F(4) + F(3)이다.
// 다시 F(4) = F(3) + F(2) / F(3) = F(2) + F(1) / F(2) = F(1) + F(0).... 방식으로 해결

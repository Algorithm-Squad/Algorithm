/**
 * 509. Fibonacci Number (1분)
 * https://leetcode.com/problems/fibonacci-number/
 * 문제 해석 : 피보나치수열 구현.. 재귀를 사용했습니다
 * 재귀함수 구현시 스택오버플로우를 방지하기 위해 최소한의 문제를 규정하고, 재귀호출하지 않고 해결할 수 있는 부분을 만들어 값을 바로 반환할 수 있게 해야됨
 *
 * 시간복잡도 : O(n^2)
 * 공간복잡도 :
 *
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  if(n === 0 || n === 1) return n;
  else return fib(n - 1) + fib(n - 2);
};
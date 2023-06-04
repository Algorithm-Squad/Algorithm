/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/87389
 * 
 * 시작 시간: 14:30
 * 종료 시간: 14:50
 */

function solution(n: number): number {
  let x = 2;
  while (true) {
    if (x % n === 1) return x;
    x++;
  }
}

// 첫 번째 케이스 제외 모두 통과. 첫 번째 케이스 런타임 에러 발생
// function solution(n: number, x = 2): number {
//   return n % x === 1 ? x : solution(n, x += 1)
// }

console.log(solution(10)); // 3
console.log(solution(12)); // 11
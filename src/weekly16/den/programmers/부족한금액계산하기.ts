/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/82612
 * 
 * 시작 시간: 21:30
 * 종료 시간: 21:40
 */

function solution(price: number, money: number, count: number): number {
  const sum: number = Array.from({ length: count }, (_, i) => i + 1)
       .reduce((acc, cur) => acc + cur * price, 0);

  return sum > money ? 0 : sum - money;
}

console.log(solution(3, 20, 4)); // 10
/**
 * 나머지가 1이 되는 수 찾기 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/87389
 * @param n 자연수
 * @returns n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x
 */
function solution(n: number) :number {
  let answer = 1;
  // n을 계속 나눠 answer++ 증가시키면서 ?
  while (answer++) {
    if(n % answer === 1) return answer;
  }
  // 1로 나눠지는 순간의 answer를 반환
}
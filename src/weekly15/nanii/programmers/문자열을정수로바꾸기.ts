/**
 * 문자열을 정수로 바꾸기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12925
 * @param s string
 * @returns number
 */
function solution(s :string) :number {
  const sign :number = s.charAt(0) === '-' ? (-1) : 1;
  const abs :number = Math.abs(Number(s));
  return sign * abs;
}
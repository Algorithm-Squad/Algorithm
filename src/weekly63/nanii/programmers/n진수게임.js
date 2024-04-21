/**
 * n진수 게임 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/17687?language=javascript
 * @param {*} n 진법
 * @param {*} t 미리 구할 숫자의 갯수
 * @param {*} m 게임에 참가하는 인원
 * @param {*} p 튜브의 순서
 * @returns
 */
function solution(n, t, m, p) {
  let num = 0;
  let str = '';
  while (str.length < t * m) {
    // t개의 숫자를 추출할 때까지 반복
    // 차례대로 숫자를 n 진수로 변환하면서 연결하고
    str += num.toString(n).toUpperCase();
    num++;
  }

  let answer = '';
  for (let i = 0; i < t; i++) {
    // m명의 참가자 대비 p번째 참가자의 숫자만 추출
    const index = p - 1 + i * m;
    answer += str[index];
  }
  return answer;
}

console.log(solution(2, 4, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"

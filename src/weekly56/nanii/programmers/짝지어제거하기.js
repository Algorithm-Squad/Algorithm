/**
 * 짝지어 제거하기 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 * @param {*} s
 */
function solution(s) {
  const answer = [];

  [...s].forEach((str) => {
    if (!answer.length || answer.at(-1) !== str) {
      answer.push(str);
    } else {
      answer.pop();
    }
  });

  return answer.length === 0 ? 1 : 0;
}

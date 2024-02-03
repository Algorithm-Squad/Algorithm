/**
 * 문제 설명
 * 튜플? 셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 일반화한 수학적 개념이다.
 */

function solution(s) {
  const answer = [];

  const sortedArray = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((v) => v.split(",").map(Number))
    .sort((a, b) => a.length - b.length);

  sortedArray.forEach((v) => {
    v.forEach((v2) => {
      if (!answer.includes(v2)) answer.push(v2);
    });
  });

  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); // [111, 20]
console.log(solution("{{123}}")); // [123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); // [3, 2, 4, 1]

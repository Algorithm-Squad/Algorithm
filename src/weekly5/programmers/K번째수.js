/**
 * K번째 수 Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * 문제 해석 : 배열을 자르고 -> 오름차순으로 정렬한 뒤 -> 해당 인덱스에 위치한 값을 반환
 *
 * 시간복잡도 : O(n) + O(nlogn)
 *
 * @param {*} array
 * @param {*} commands
 * @returns
 */
function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    let [i, j ,k] = command;
    answer.push(array.slice(i - 1, j)
    .sort((a, b) => a - b)
    .at(k - 1));
  });
  return answer;
}

const a = [1, 5, 2, 60, 3, 7, 4];
const b = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]; //[5, 6, 3]
// const b = [[2, 2, 3], [4, 4, 1], [1, 7, 1]]; //[5, 6, 3]
console.log(solution(a, b));
/**
 * 행렬의 곱셉 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12949
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let result = [];

    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      result.push(sum);
    }

    answer.push(result);
  }
  return answer;
}

// 1. reduce를 사용한 풀이 (실패))
// function solution(arr1, arr2) {
//   let answer = [];

//   arr1.forEach((row, i) => {
//     const result = row.map((num, j) => {
//       return row.reduce((acc, cur, idx) => {
//         return acc + cur * arr2[idx][j];
//       }, 0);
//     });

//     answer.push(result);
//   });

//   return answer;
// }

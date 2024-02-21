/**
 * 반환되는 2차원 배열의 크기
 * - 2차원 배열의 길이 === arr1의 길이
 * - 각 요소의 길이 === arr2 요소의 길이
 */

function solution(arr1: number[][], arr2: number[][]): number[][] {
  const answer: number[][] = [];

  for (let i = 0; i < arr1.length; i++) {
    const temp: number[] = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
    }
    answer.push(temp);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [[3], [3]]
  )
); // [[15, 15], [15, 15], [15, 15]]

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
// [[22, 22, 11],
//  [36, 28, 18],
//  [29, 20, 14]]

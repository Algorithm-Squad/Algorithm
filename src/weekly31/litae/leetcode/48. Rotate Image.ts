export function rotate(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  matrix.forEach((array) => array.reverse());
}

// 풀이
// 1. n X n의 배열을 90도 회전시킨 것은 배열을 대각선([1, 1], [2, 2], [3, 3]...[n, n])을 기준으로 반대로 이동하고
// 2. 역순으로 정렬한 것과 같다

// 예

// 1. 초기값
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9

// 2. 대각선(1,5,9)를 기준으로 뒤집는다
// 1, 4, 7
// 2, 5, 8
// 3, 6, 9

// 3. 역순으로 정렬한다
// 7, 4, 1
// 8, 5, 2
// 9, 6, 3

// https://leetcode.com/problems/rotate-image/

function rotate(matrix) {
  const rotatedImage = matrix.reverse();

  for (let i = 0; i < rotatedImage.length; i++) {
    for (let j = i; j < rotatedImage.length; j++) {
      let temp = rotatedImage[i][j];
      rotatedImage[i][j] = rotatedImage[j][i];
      rotatedImage[j][i] = temp;
    }
  }
  return rotatedImage;
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// 매개변수
// matrix : 행과 열이 모두 n개인 2차원 배열을 요소로 갖는 배열

// 출력
// 매개변수 matrix를 90도로 회전했을 때의 2차원 배열

// 문제 설명 및 해결
// 2차원 배열을 90도로 회전시키는 문제이다.
// 2차원 배열을 90도로 회전시키는 방법은 다음과 같다.
// 1. 2차원 배열을 90도로 회전시키기 위해서는 2차원 배열의 행과 열의 개수가 같아야 한다.
// 2. 2차원 배열의 행과 열의 개수가 같다면, 2차원 배열의 행과 열을 바꾸고, 행의 개수만큼 반복문을 돌면서 각 행의 요소들을 역순으로 바꾼다.
// 3. 2차원 배열의 행과 열의 개수가 다르다면, 2차원 배열의 행과 열을 바꾸고, 행의 개수만큼 반복문을 돌면서 각 행의 요소들을 역순으로 바꾼다.
// 이 문제에서는 2차원 배열의 행과 열이 길이가 같기 때문에 2번 방법을 사용했다.
// 2차원 배열의 행과 열을 바꾸기 위해서는 reverse 메소드를 사용했다.

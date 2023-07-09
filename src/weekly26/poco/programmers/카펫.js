// https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript

function solution(brown, yellow) {
  const carpetSize = brown + yellow;

  // i가 3부터 시작하는 이유는? => 노란색 카펫의 최소 갯수가 1개이기 때문에
  for (let i = 3; i <= carpetSize; i++) {
    const width = carpetSize / i;
    const height = i;

    if (width < height) continue;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

// 매개변수
// brown : 갈색 카펫 갯수
// yellow : 노란색 카펫 갯수

// 출력
// number[] : 전체 카펫의 가로, 세로 크기

// 문제 해결 및 설명
// 카펫의 가로, 세로 크기를 구하는 문제
// 노란색 카펫은 최소 1개이기 때문에, 카펫의 최소 가로, 세로 갯수는 3, 3개이다
// 갈색 카펫과 노란 카펫을 모두 더해서 전체 카펫의 갯수를 확인하고, 전체 카펫을 i로 나누어서 너비와 높이를 구하고
// 높이가 너비보다 큰 경우(문제의 조건에서 벗어나느 경우)에는 continue를 통해 다음 반복문으로 넘어가고
// 높이가 너비보다 작은 경우에는 현재 (너비 -2) * (높이 -2)가 yellow와 같은지 확인하고 같다면 return한다

// function solution(brown, yellow) {
//   var answer = [];

//   const yellowDivisor = [];

//   // yellow의 약수 구하기
//   for (let i = 1; i <= yellow; i++) {
//     if (yellow % i === 0) {
//       yellowDivisor.push(i);
//     }
//   }

//   // yellow의 약수의 곱이 yellow와 같은지 확인
//   for (let i = 0; i < yellowDivisor.length; i++) {
//     if (
//       yellowDivisor[i] * yellowDivisor[yellowDivisor.length - 1 - i] ===
//       yellow
//     ) {
//       if (
//         yellowDivisor[i] * 2 +
//           yellowDivisor[yellowDivisor.length - 1 - i] * 2 +
//           4 ===
//         brown
//       ) {
//         answer.push(yellowDivisor[yellowDivisor.length - 1 - i] + 2);
//         answer.push(yellowDivisor[i] + 2);
//         break;
//       }
//     }
//   }

//   return answer;
// }

// 문제 해결 및 설명
// 카펫의 가로, 세로 크기를 구하는 문제
// 카펫의 가로, 세로 크기를 구하기 위해서는 yellow의 약수를 구해야함
// yellow의 약수를 구하고, 약수의 곱이 yellow와 같은지 확인
// yellow의 약수의 곱이 yellow와 같다면, yellow의 약수를 가로, 세로 크기로 하고, yellow의 약수의 곱에 4를 더한 값이 brown과 같은지 확인
// 같다면, yellow의 약수를 가로, 세로 크기로 하고, yellow의 약수의 곱에 4를 더한 값을 반환
// 다르다면, yellow의 약수를 가로, 세로 크기로 하고, yellow의 약수의 곱에 4를 더한 값이 brown과 같을 때까지 반복

// https://leetcode.com/problems/triangle/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const dp = Array.from({ length: triangle.length }, () => []);
  // [[],[],[],[]]

  dp[0][0] = triangle[0][0];
  // [[2],[],[],[]]

  for (let i = 1; i < triangle.length; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    // [[2],[5],[],[]] => 2 + 3
    dp[i][triangle[i].length - 1] =
      dp[i - 1][triangle[i - 1].length - 1] +
      triangle[i][triangle[i].length - 1];
  }

  for (let i = 2; i < triangle.length; i++) {
    for (let j = 1; j < triangle[i].length - 1; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }

  return Math.min(...dp[dp.length - 1]);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
//[[2],[3,4],[6,5,7],[4,1,8,3]]

// 매개변수
// triangle : 2차원 배열

// 출력
// number (최소 경로의 합)

// 문제 해결 및 설명
// 2차원 배열 triangle이 주어지고, 삼각형의 최소 경로의 합을 반환하는 문제
// 삼각형의 최소 경로의 합이란, 맨 위에서부터 아래로 내려가면서, 각 행에서 인접한 수로만 이동할 수 있을 때, 최소 경로의 합을 의미
// 처음에 문제를 잘못 이해하고 풀고, 문제를 다시 이해했을 때에는 DP를 사용해서 풀어야함을 알게되었고
// 블로그를 보면서 공부했지만 도저히 이해가 되지 않음

// 최소 경로 합을 구할 때, 바로 다음 row에서의 idx와 idx+1 중에 작은 수를 고르는 문제라고 문제를 잘못 이해함
// const minimumTotal = function (triangle) {
//   let curIdx = 0;
//   let minimumSum = 0;

//   triangle.forEach((element, index) => {
//     if (element.length === 1) {
//       curIdx = index;
//       minimumSum += element[curIdx];
//     }

//     if (element.length >= 2) {
//       element[curIdx] < element[curIdx + 1]
//         ? (minimumSum += element[curIdx])
//         : ((minimumSum += element[curIdx + 1]), (curIdx = curIdx + 1));
//     }
//   });
//   return minimumSum;
// };

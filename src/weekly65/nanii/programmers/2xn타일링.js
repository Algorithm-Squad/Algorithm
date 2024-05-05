/**
 * 2xn 타일링 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12900?language=javascript
 * @param {*} n 가로의 길이
 * @returns
 * 세로의 길이가 2이고 가로의 길이가 n인 사각형모양의 타일
 * dp알고리즘
 */
const 포맷 = 1000000007;
function solution(n) {
  let dp = [1, 1]; // n (자연수) 1부터 시작

  for (let i = 2; i <= n; i++) {
    // 현재 타일은 이전, 그 이전 타일 개수를 더한 값
    dp[i] = (dp[i - 1] + dp[i - 2]) % 포맷;
  }

  return dp[n];
}

console.log(solution(4)); // 5

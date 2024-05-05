// https://school.programmers.co.kr/learn/courses/30/lessons/12900

const solution = (n) => {
  const dp = Array.from({ length: n + 1 }).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
};

console.log(solution(4)); // 5

// 매개변수
// n : 가로 길이

// 출력
// 가로의 길이가 n인 바닥을 채우는 방법의 수를 반환

// 문제 설명 및 해결
// 가로 길이가 2이고 세로 길이가 1인 직사각형 모양의 타일로 가로의 길이가 n인 바닥을 가득 채우는 방법의 수를 구하는 문제이다.
// 경우의 수를 1,000,000,007로 나눈 나머지를 return해야 한다.
// dp를 사용해서 문제를 해결했다.
// dp[1]은 1, dp[2]는 2로 초기화한다.
// dp[i] = dp[i - 1] + dp[i - 2]이다.

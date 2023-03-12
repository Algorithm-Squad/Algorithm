// https://www.acmicpc.net/problem/11727

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'src/weekly9/poco/BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(Number);

const dp = [0, 1, 3, 5];
const n = input[0];
for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] * 2;
  dp[i] = dp[i] % 10007;
}

console.log(dp[n]);

// 문제 설명 및 해결
// 2(행) x n(열) 모양의 직사각형을 1 x 2, 2 x 1, 2 x 2 타일로 채우는 방법의 수를
// 구하는 문제로, 채우는 방법의 수를 10,007로 나눈 나머지를 출력하는 문제
// 먼저 2 x n 모양의 직사각형의 가장 왼쪽에 2 x 1 / 1 x 2 / 2 x 2 타일을 채우는 경우
// 남은 부분에 대해서 타일을 채울 수 있는 경우의 수는 각각 2 x (n-1) / 2 x (n-2) / 2 x (n-2) 이다
// 따라서 위의 경우의 수 3가지를 모두 더하는 방법으로 2 x n 모양의 직사각형을 채우는 방법의 수를 구할 수 있다.

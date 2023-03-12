/**
 * 문제 출처: https://www.acmicpc.net/problem/11727
 * 시간복잡도: O(N)
 * 
 * 2 * 1: 1;
 * 2 * 2: 3;
 * 2 * 3: 5 = 3 + 1 * 2;
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

function dynamicProgramming(input) {
  const memo = {
    1: 1,
    2: 3
  }

  for(let i = 3; i <= input; i++){
    memo[i] = memo[i - 1] + (memo[i - 2] * 2);
  }

  return memo[input] % 10007;
}

console.log(dynamicProgramming(input));
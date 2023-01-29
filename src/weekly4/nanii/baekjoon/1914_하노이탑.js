const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/**
 * 1914. 하노이탑 / 실버
 * https://www.acmicpc.net/problem/1914
 *
 * 문제해석 : a, b, c 의 장대를 두고 원반을 a -> c 로 옮기는 것
 * base case : n === 0
 * recursive case : a -> b 로 임시로 옮겨두고, 다음 원반을 a -> c,  앞전에 작은 원반을 b -> c 반복
 * 결과 : 테스트케이스는 작동하는데 채점중(40%를 넘기지 못하고 실패하였습니다..)
 *
 * 시간복잡도 :
 * 공간복잡도 :
 */

function main(input) {
  const n = Number(input);
  let sum = (BigInt(Math.pow(2, n)) - 1n).toString();
  console.log(sum);
  if(n <= 20) hanoi(n, 1, 2, 3);
}

function hanoi(n, a, b, c) {
  if(n === 0) return;
  hanoi(n - 1, a, c, b);  // A -> B (C경유)
  console.log(`${a} ${c}`);
  hanoi(n -1, c, b, a); //B -> C (A경유)
}

main(input);
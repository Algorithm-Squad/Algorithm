/**
 * 2217번 로프 / 실버4
 * https://www.acmicpc.net/problem/2217
 * 문제해석 : (버틸 수 있는 최대 중량이 작은 로프 x 이용중인 로프의 갯수 = w)
 * 로프 배열을 내림차순으로 정렬한 다음 이용중인 로프의 갯수를 늘려 들어올릴 수 있는 중량을 나열한 배열 생성
 * 그 배열에서 최대값이 주어진 로프를 이용해 들어올릴 수 있는 물체의 최대 중량이다
 *
 * 시간복잡도 : O(nlogn)
 * 공간복잡도 : O(n)
 */
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(Number); //2 10 15

const main = () => {
  const array = input.slice(1).sort((a, b) => b - a);
  let weight = [];
  for(let i = 0; i < array.length; i ++) {
    weight.push(array[i] * (i + 1));
  }
  console.log(Math.max(...weight));
}

main();
//20
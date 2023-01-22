// https://www.acmicpc.net/problem/2309

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += Number(input[i]);
}

const exception = [];

for (let j = 0; j < 8; j++) {
  for (let t = j + 1; t < 9; t++) {
    if (Number(input[j]) + Number(input[t]) === sum - 100) {
      exception.push(input[j]);
      exception.push(input[t]);
      break;
    }
  }
}

const result = input
  .filter((el) => {
    if (el !== exception[0] && el !== exception[1]) {
      return el;
    }
  })
  .sort((a, b) => {
    return a - b;
  });

result.forEach((el) => console.log(el));

// 문제설명
// 주어진 9개의 숫자중에, 합하여 100을 만들수 있는 7개의 숫자를 오름차순으로 출력하는 문제.
// 즉, 9개의 숫자 중에 2개의 숫자를 제외해야하고, 이 2개의 숫자의 합은 9개의 숫자의 합에서 100을 뺀 수와 같다.
// 따라서, 9개의 숫자를 모두 더한 값(sum)을 구하고, sum과 100과의 차이와 같은 2개 숫자의 합을 이중 for문을 통해서 구해서 배열(exception)에
// 담았고, input의 요소 중 exception의 요소와 일치하지 않는 숫자들만 출력하였다.

// 시간복잡도는 이중 for문 사용으로 O(n^2) 메모리 9340 KB, 시간 120ms

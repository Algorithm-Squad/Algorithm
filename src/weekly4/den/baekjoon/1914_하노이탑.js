/*
[내 풀이x]
풀지 못 했지만, 풀이를 보고 이해하려고 노력했습니다..

구현 과정
1. N개의 원반을 목표 기둥으로 옮기기 위해서는, 우선 N-1개의 원반들을 중간 기둥으로 옮겨야 된다.
2. 그 다음 제일 큰 원반을 목표 기둥으로 옮긴다..
3. 중간 기둥으로 옮겨진 N-1개의 원반들을 목표 기둥으로 옮긴다.
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

function hanoi(n, a, b, c) {
  // 종료조건: 시작기둥에 있는 마지막 원판을 목표기둥으로 옮긴다.
  if (n === 1) {
    console.log(a, c);
    return;
  }
  // n-1개 원판을 시작 기둥에서 중간 기둥으로 옮긴다.
  hanoi(n - 1, a, c, b);
  // 제일 큰 원판을 목표 기둥으로 옮긴다.
  console.log(a, c);
  // 중간 기둥에 있는 모든 원판들을(제일 큰 원판을 제외한 나머지 원판)을 모두 목표 기둥으로 옮긴다.
  hanoi(n - 1, b, a, c);
}

console.log(Math.pow(2, input) - 1);

// 백준에서 원반의 갯수가 20개 이상이면 과정을 출력하지 않아도 된다는 조건 이행
if(input <= 20){
  hanoi(input, 1, 2, 3);
}

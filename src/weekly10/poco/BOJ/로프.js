// https://www.acmicpc.net/problem/2217

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'src/weekly10/BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (inputArr) => {
  let max = 0;
  let count = inputArr[0];
  let ropes = inputArr.slice(1).sort((a, b) => a - b);
  let n = count;

  for (let i = 0; i < count; i++) {
    let curr = ropes[i] * n;
    if (max < curr) {
      max = curr;
    }
    n--;
  }
  return max;
};

console.log(solution(input));

// 문제 설명 및 해결
// input으로 총 로프의 갯수와 각 로프들의 최대 중량이 주어질 때, 로프를 병렬로 연결해서
// 버틸 수 있는 최대 중량을 구하는 문제
// 모든 로프를 사용할 필요는 없으나, 각각의 로프에는 모두 (총 중량 / 로프의 수)만큼의 중량이 걸리게 된다)
// 로프가 버틸 수 있는 중량을 기준으로 오름차순 정렬을 하고, 전체 로프의 중량을
// 순회하면서, 해당 로프의 중량을 최소 기준으로 정했을 때, 들 수 있는 최대 중량을 구한다.
// 즉, 10, 15, 20, 25라는 각각의 중량을 버틸 수 있는 로프들이 있는 경우,
// 10 로프를 최소 값으로 정하는 경우, 각 로프는 균등한 무게를 버텨야하기 때문에, 최대 중량은
// 10 * 4 = 40이고, 이후 15 로프를 최소값으로 정하는 경우, 10 로프는 15 무게를 들 수 없기 때문에,
// 15 * 3 = 45가 최대 중량이 된다. 이렇게 모든 로프들을 오름차순 정렬한 후 순회하면서 최대 중량을 계산.
// 시간복잡도 예상 sort 매서드 O(nlogn) 이상

const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

/**
 * 2309번 일곱난쟁이
 * https://www.acmicpc.net/problem/2309
 * 문제해석 : 9명의 키가 주어졌을 때, 7명의 합이 100임을 이용해 7명의 키를 오름차순으로 출력
 * 주어진 입력을 각각 더해보면서 합을 100을 만들고, 그 요소들을 오름차순으로 출력
 *
 * Brute Force : 전체탐색법
 * 1. 모든 경우의 수를 탐색하면서 쓸데없는 연산을 하지 않고 조건에 충족되는 결과만 가져옴
 * 2. 선형구조를 전체탐색하는 [순차탐색] , 비선형구조를 전체탐색하는 [깊이우선탐색, 너비우선탐색]
 * 장점 : 설계,구현이 복잡하지 않다
 * 단점 : 실행시간이 길고, 메모리효율도 비효율적
 *
 * 해결과정
 * (1) 9명 총 합을 구하고, 7명의 합이 100으로 고정되어있음을 이용해 나머지 2명을 찾습니다
 * (2) 배열에서 나머지 2명의 합을 sum = index[i] + index[j] 으로 할당하고
 * (3) 배열을 순회하면서 i와, j의 값이 일치하지 않으면서 sum = (9명 총합 - 100)일 때의 인덱스를 찾고
 * (4) 주어진 입력 배열에서 해당 i,j를 제외시키고 오름차순으로 정렬한 값을 순서대로 출력합니다.
 *

 * 시간복잡도 : O(n^4) = for+for+filter+sort ....(이게 최선인가 싶은 복잡도네요...더 연구해보겠습니다)
 * 공간복잡도 :
 */

function main() {
  let res;
  // (1) 9 명의 키를 모두 더하고, 7 명의 합이 100이므로 난쟁이가 아닌 2명을 찾아서 제외합니다.
  const totalHeight =  input.reduce((a, b) => a + b);

  // (2) input array 에서 index를 따라서 2중 for 문으로 input[i], input[j] 를 순회합니다.
  for(let i = 0; i < input.length; i++) {
    for(let j = 1; j < input.length - 1; j++) {
      let sum = input[i] + input[j];
      // (3) i와 j가 같지 않다는 조건(중복x)을 두고, 총합 에서 2명의 합을 뺀 값이 100일 때의 index를 찾습니다.
      if(totalHeight - sum === 100 && i !== j) {
        res = input
        // input array 에 filter(), sort() 메소드를 사용하여 i, j인 값을 제외하고, 오름차순으로 출력합니다.
        .filter((_, idx) => idx !== i && idx !== j)
        .sort((a, b) => a - b);
      }
    }
  }
  res.forEach((e) => console.log(e));
}

main();
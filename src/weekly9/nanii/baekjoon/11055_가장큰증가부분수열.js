/**
 * 가장 큰 증가 부분 수열 / 실버2
 * 문제 해석 : DP -> 점화식
 * dp [] 에 array 값이 더 커진 경우 합하여 배열안에 넣음
 * 최종적으로 배열내에는 array 요소의 조합을 합한 모든 경우의 수가 포함되어 있음
 * 그 중 최대값을 반환
 *
 * 시간복잡도 : O(n2)
 * 공간복잡도 : O(n)
 * https://www.acmicpc.net/problem/11055
 */

const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input11055.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const array = input[1].split(' ').map(Number); //1 100 2 50 60 3 5 6 7 8

const main = () => {
  const dp = [];
  for(let i = 0; i < array.length; i ++) {
    dp[i] = array[i];

    for(let j = 0; j < i; j++) {
      // console.log('전', dp[j], '후', dp[i], dp[j] + array[i], array[j] < array[i] && dp[i] < dp[j] + array[i]);
      //조건 1 : 다음요소가 더 크고
      //조건 2 : 증가하는 요소인지 확인 dp[i] = 현재 인덱스 까지의 합을 넣은 배열

      if(array[j] < array[i] && dp[i] < dp[j] + array[i]) {
        dp[i] = dp[j] + array[i];
      }
    }
  }
  console.log(Math.max(...dp));
}

main();
//113
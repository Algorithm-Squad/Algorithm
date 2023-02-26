// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
const decToBin = (num) => num.toString(2).match(/1/g);
const countBits = function (n) {
  const answer = [0];

  for (let i = 1; i <= n; i++) {
    answer.push(decToBin(i));
  }
  return answer;
};

// 문제 설명 맟 해결
// 어떤 양의 정수 n이 주어지면 0~n 까지 총 n+1 개의 배열을 만들어서 n까지의 양의 정수를 이진수로 변환시에 1의 개수를 반환하는 것이다.
// 0의 경우, 1이 아닌 2진법으로 변환시에도 0이 반환되기 때문에, 정규표현식을 사용했을 때 null 값이 출력된다. 따라서, 모든 경우에서 0은 고정
// 1부터 n까지 for 루프를 통해 2진법으로 변환한 뒤 정규표현식으로 1의 갯수를 count 해주었다.
// 시간복잡도 135ms, 공간복잡도 53.2MB

/*
var countBits1 = function (n) {
  let dp = new Array(n + 1);
  dp.fill(0);
  let offset = 1;
  for (let i = 1; i <= n; ++i) {
    if (offset * 2 == i) {
      offset = i;
    }
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
};

내장함수를 사용하지 않고 해결하는 방식
const countBits = function(num) {
  const result = [];
  for( let i=0; i<=num; ++i )
  {
      if( i<2 )
          result.push(i);
      else
          result.push( result[Math.floor(i/2)] + i%2 );
  }
  return result;
};
*/

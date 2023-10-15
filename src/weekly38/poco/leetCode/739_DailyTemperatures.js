// https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = [];

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        // j가 i 보다 높은 온도일 때
        answer.push(j - i);
        break;
      } else if (j === temperatures.length - 1) {
        // j가 맨 마지막이고, 맨 마지막 온도도 높은 온도 아닐 때
        answer.push(0);
      }
    }
  }

  // 맨 마지막은 무조건 0
  answer.push(0);

  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
// 매개변수
// temperatures: 매일의 온도를 담은 리스트

// 출력
// 매일의 더 따뜻한 날씨를 위해서는 며칠을 더 기다려야 하는지를 담은 리스트

// 문제 설명 및 해결
// 온도 배열이 주어졌을 때, 현재 i 번째 날에서 더 높은 온도를 만나려면 기다려야하는 일수를 구하는 문제
// 이중 for문을 사용해서 i 번째 날보다 1씩 증가시킨 j를 비교하면서 더 높은 온도를 만나면 answer에 추가
// 만약 j가 맨 마지막이고, 맨 마지막 온도도 높은 온도가 아니면 0을 추가
// 맨 마지막은 무조건 0을 추가

/**
 * 문제출처: https://programmers.co.kr/learn/courses/30/lessons/42584
 * 시작시간: 11:30
 * 종료시간: 12:00
 * 결과: 첫 번째 시도 실패
 */

function solution1(prices) {
  let answer = new Array(prices.length).fill(0);
  let rest: number[] = [];

  const recursion = () => {
    const length = prices.length - 1;
    if (prices.length === 0) return;
    const targetPrice = prices.pop();
    const maintainTime = rest.filter((price) => price >= targetPrice).length;
    rest.push(targetPrice);
    answer[length] = maintainTime;
    recursion();
  };
  recursion();

  return answer;
}
console.log(solution1([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]

/**
 * 시작시간: 21:40
 * 종료시간: 21:55
 * 결과: 성공
 */

function solution2(prices) {
  let answer = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    const targetPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const comparePrice = prices[j];
      if (targetPrice <= comparePrice) {
        answer[i]++;
      } else if (targetPrice > comparePrice) {
        answer[i]++;
        break;
      } else if (targetPrice === prices.length) {
        break;
      }
    }
  }

  return answer;
}
console.log(solution2([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]

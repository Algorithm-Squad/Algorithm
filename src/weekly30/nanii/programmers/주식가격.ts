/**
 * 주식가격 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 * @param prices sec단위로 기록된 주식가격이 담긴 배열
 * @returns 가격이 떨어지지 않은 기간 sec 반환
 */
function solution(prices: number[]):number[] {
  const answer = Array(prices.length).fill(0);
  const length = prices.length;

  // index(value) 의 time = prices.length - index - 떨어진기간(떨어진 시점)
  for(let i = 0; i < length; i++) {
    for(let j = i + 1; j < length; j++)  {
      answer[i]++;
      if(prices[i] > prices[j]) {
        break;
      }
    }
  }
  return answer;
}

// [1,2,3,2,3] 에서 (0) 1은 끝까지 안떨어졌으니 = 4-0
// (1) 2 = 4-1
// (2) 3 = 4-2-1 (바로 다음 인덱스에서 떨어졌으므로 --1)
// (3) 2 = 4-3
// (4) 3 = 4-4
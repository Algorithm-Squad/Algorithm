export function solution(prices: number[]): number[] {
  const answer: number[] = new Array(prices.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      const temp: number = stack.pop()!;
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while (stack.length) {
    const temp: number = stack.pop()!;
    answer[temp] = prices.length - temp - 1;
  }

  return answer;
}

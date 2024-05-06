export function solution(n: number): number[][] {
  const answer: number[][] = [];

  function hanoi(n: number, from: number, to: number, via: number) {
    if (n === 1) {
      answer.push([from, to]);
    } else {
      hanoi(n - 1, from, via, to);
      answer.push([from, to]);
      hanoi(n - 1, via, to, from);
    }
  }

  hanoi(n, 1, 3, 2);

  return answer;
}

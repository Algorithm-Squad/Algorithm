export function solution(n: number): number | void {
  for (let i: number = 1; i < n; i++) {
    if (n % i === 1) return i;
  }
}

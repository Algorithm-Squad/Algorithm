export function solution(price: number, money: number, count: number): number {
  let sumOfPrice: number = 0;

  for (let i: number = 1; i <= count; i++) {
    sumOfPrice += price * i;
  }

  if (sumOfPrice - money > 0) {
    return sumOfPrice - money;
  }

  return 0;
}

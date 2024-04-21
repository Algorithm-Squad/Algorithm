export function solution(w: number, h: number): number {
  return w * h - (w + h - getGCD(w, h));
}

// 유클리드 호제법을 이용하여 최대공약수 구하는 함수
function getGCD(num1: number, num2: number): number {
  let [a, b] = [0, 0];

  if (num1 < num2) {
    a = num2;
    b = num1;
  } else {
    a = num1;
    b = num2;
  }

  if (b === 0) return a;

  if (a % b === 0) {
    return b;
  } else {
    return getGCD(b, a % b);
  }
}

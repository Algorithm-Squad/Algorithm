function solution(brown: number, yellow: number): number[] {
  const vertex = 4;

  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      const divisor = yellow / i;
      const isBrownSize = (divisor + i) * 2 + vertex === brown;

      if (isBrownSize) {
        return [divisor + 2, i + 2];
      }
    }
  }

  return [];
}

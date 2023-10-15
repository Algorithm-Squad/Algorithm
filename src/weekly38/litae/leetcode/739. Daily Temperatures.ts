export function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        result.push(j - i);
        break;
      }
    }
    if (result.length !== i + 1) result.push(0);
  }

  return result;
}

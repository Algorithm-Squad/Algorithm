/**
 * 739. Daily Temperatures / Medium
 * https://leetcode.com/problems/daily-temperatures/
 * @param temperatures
 */
function dailyTemperatures(temperatures: number[]): number[] {
  let result = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const current = temperatures[i];
    let day = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      day++;
      if (current < temperatures[j]) {
        result[i] = day;
        break;
      }
    }
  }
  return result;
}

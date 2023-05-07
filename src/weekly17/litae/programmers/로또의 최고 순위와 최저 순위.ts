export function solution(
  lottos: number[],
  win_nums: number[]
): [number, number] {
  const MAX_NUMBER: number = 6;
  let matchingCount: number = 0;
  let unknownCount: number = 0;

  for (const number of lottos) {
    if (win_nums.includes(number)) matchingCount += 1;
    if (number === 0) unknownCount += 1;
  }

  const bestRank: number = MAX_NUMBER - (matchingCount + unknownCount) + 1;
  const worstRank: number = MAX_NUMBER - matchingCount + 1;

  return [Math.min(bestRank, MAX_NUMBER), Math.min(worstRank, MAX_NUMBER)];
}

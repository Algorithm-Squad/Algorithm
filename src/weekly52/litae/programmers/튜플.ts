export function solution(s: string): number[] {
  const answer: number[] = [];
  const sortedArray: number[][] = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((item) => item.split(",").map(Number))
    .sort((a, b) => a.length - b.length);

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray[i].length; j++) {
      if (!answer.includes(sortedArray[i][j])) answer.push(sortedArray[i][j]);
    }
  }

  return answer;
}

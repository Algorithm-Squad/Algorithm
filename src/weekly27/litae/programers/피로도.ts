function solution(k: number, dungeons: [number, number][]): number {
  let count = 0;
  let fatigue = k;
  dungeons.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < dungeons.length; i++) {
    if (fatigue >= dungeons[i][0]) {
      fatigue -= dungeons[i][1];
      count++;
    }
  }
  return count;
}

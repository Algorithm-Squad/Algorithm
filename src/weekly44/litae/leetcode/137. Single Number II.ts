function singleNumber(nums: number[]): number {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.has(num) ? map.set(num, map.get(num)! + 1) : map.set(num, 1);
  }

  for (const [key, value] of map.entries()) {
    if (value !== 3) return key;
  }

  return 0;
}

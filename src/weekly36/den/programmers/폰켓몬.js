function solution(nums) {
  const maximum = nums.length / 2;

  return new Set([...nums]).size > maximum ? maximum : new Set([...nums]).size;
}

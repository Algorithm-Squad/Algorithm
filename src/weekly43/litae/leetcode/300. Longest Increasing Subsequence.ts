function lengthOfLIS(nums: number[]): number {
  let answer: number[] = [];

  nums.forEach((num) => {
    let [left, right] = [0, answer.length];
    while (left < right) {
      const mid = Math.floor((right + left) / 2);

      answer[mid] >= num ? (right = mid) : (left = mid + 1);
    }

    answer[left] = num;
  });

  return answer.length;
}

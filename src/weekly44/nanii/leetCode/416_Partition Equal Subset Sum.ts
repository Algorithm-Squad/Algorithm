/**
 * 416. Partition Equal Subset Sum / Medium
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * @param nums
 * @returns nums 배열이 2개의 부분집합으로 나눠지는 지 boolean 값으로 반환 (각 부분집합의 합이 같아야 함)
 */
function canPartition(nums: number[]): boolean {
  // 조합 생성하면서 양쪽 합이 같으면 리턴
  const target = nums.reduce((acc, cur) => acc + cur, 0) / 2; // 양쪽 배열의 합이 각각 target이 되어야 함
  if (nums.length % 2 !== 0 || target % 1 !== 0) return false; // target이 정수가 아니면 false

  let dp = new Array(target + 1).fill(0); // 타켓길이 만큼 배열을 생성
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = target; j >= num; j--) {
      // 현재 부분집합의 합과, 현재 숫자를 더한 값을 더한 부분집합의 합 중 큰 값을 dp에 저장
      dp[j] = Math.max(dp[j], dp[j - num] + num);
    }
  }
  return dp[target] === target;
}

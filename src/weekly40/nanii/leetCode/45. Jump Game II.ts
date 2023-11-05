/**
 * 45. Jump Game II / Medium
 * https://leetcode.com/problems/jump-game-ii
 * @param nums 각 인덱스에서 점프할 수 있는 최대 거리가 주어진 배열
 * @returns 마지막 원소에 도달하기 위해 필요한 최소 점프 횟수
 */
function jump(nums: number[]): number {
  const n = nums.length;

  let steps = 0,
    cur = 0,
    max = 0;

  //[2,3,1,1,4]
  for (let i = 0; i < n - 1; i++) {
    const j = nums[i]; // 0일땐 2로 이동가능
    max = Math.max(max, i + j); // max = 2
    if (i === cur) { // 현재위치에서
      steps++; // 점프 횟수를 증가시키고
      cur = max; // 현재위치를 이동할 수 있는 최대 거리로 갱신
    }
  }

  return steps;
}

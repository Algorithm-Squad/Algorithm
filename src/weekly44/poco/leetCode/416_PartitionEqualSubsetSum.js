// https://leetcode.com/problems/partition-equal-subset-sum/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const total = nums.reduce((acc, cur) => acc + cur);
  // total이 홀수이면 무조건 false이다.
  if (total % 2 !== 0) return false;

  // target은 전체 합산의 절반을 의미한다.
  const target = total / 2;

  // dp 배열의 길이가 target보다 1이 큰 이유는
  // dp[0]은 0이라는 의미이고, dp[1]부터 target까지의 값을 구하기 위해서이다.
  // dp 배열의 각 요소의 의미는 해당 요소까지의 부분집합의 합이 target이 되는지를 의미한다.

  const dp = Array(target + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      // 아래부분의 식의 의미는
      // dp[j]는 dp[j] || dp[j - nums[i]]이다.
      // 이건 dp[j]가 true이거나 dp[j - nums[i]]가 true이면 dp[j]는 true이다.
      // dp[j - nums[i]]가 true라는 것은 nums[i]를 더해서 j를 만들 수 있다는 의미이다.
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }

  return dp[target];
};

console.log(canPartition([1, 2, 5])); // false
// console.log(canPartition([1, 5, 11, 5])); // true

// 매개변수
// nums: 정수를 요소로 갖는 배열

// 출력
// nums 배열을 두 개의 부분집합으로 나누었을 때, 두 부분집합의 합이 같으면 true, 아니면 false

// 문제 설명 및 해결
// 정수를 요소로 갖는 배열 nums가 주어졌을 때, nums 배열을 두 개의 부분집합으로 나누었을 때, 두 부분집합의 합이 같으면 true, 아니면 false를 구하는 문제이다.
// dp를 사용해서 문제를 해결했다.
// 먼저 nums 배열의 총합을 구하고, 2로 나누었을 때 나머지가 0이 아니면 무조건 false이다.
// 그리고 target은 총합의 절반을 의미한다.
// dp 배열의 길이가 target보다 1이 큰 이유는 dp[0]은 0이라는 의미이고, dp[1]부터 target까지의 값을 구하기 위해서이다.
// dp 배열의 각 요소의 의미는 해당 요소까지의 부분집합의 합이 target이 되는지를 의미한다.
// 이중 포문을 사용해서 dp 배열을 구한다.
// dp[j] = dp[j] || dp[j - nums[i]]; 이 부분의 식의 의미는 dp[j]가 true이거나 dp[j - nums[i]]가 true이면 dp[j]는 true이다.
// dp[j - nums[i]]가 true라는 것은 nums[i]를 더해서 j를 만들 수 있다는 의미이다.

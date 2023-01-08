// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

// 순열 알고리즘
// 순열은 조합과 달리 순서가 의미가 있다.
// 함수의 내용은 조합과 동일하나, index 요소를 선택하고 남은 배열을 재귀적 구현을 실행할 때, 해당 index의 다음 요소들을 검토하는 것이 아닌,
// 전체 배열에서 index 요소를 제외한 배열에 대해서 n-1개를 조합한다고 생각하자
// 재귀함수 return 조건은 주어진 배열에서 1개를 선택할 때이다.
// 시간복잡도 계산.... 주어진 요소에 대해서 모두 검토 O(n)
// 재귀함수의 시간복잡도는? O(n^2)

const permute = function (nums, select = nums.length) {
  const result = [];
  if (select === 1) return nums.map((v) => [v]);

  nums.forEach((fixedNum, index, origin) => {
    const restArr = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = permute(restArr, select - 1);
    const attached = permutations.map((permutation) => [fixedNum, ...permutation]);
    result.push(...attached);
  });
  return result;
};

console.log(permute([1, 2, 3]));

// var permute = function(nums) {
//   let res = []
//   dfs(nums, [], Array(nums.length).fill(false), res)
//   return res
// };

// function dfs(letters, path, used, res) {
//   if (path.length == letters.length) {
//       // make a deep copy since otherwise we'd be append the same list over and over
//       res.push(Array.from(path));
//       return;
//   }
//   for (let i = 0; i < letters.length; i++) {
//       // skip used letters
//       if (used[i]) continue;
//       // add letter to permutation, mark letter as used
//       path.push(letters[i]);
//       used[i] = true;
//       dfs(letters, path, used, res);
//       // remove letter from permutation, mark letter as unused
//       path.pop();
//       used[i] = false;
//   }
// }

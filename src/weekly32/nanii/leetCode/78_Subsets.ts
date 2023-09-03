/**
 * 78. Subsets / Medium
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums: number[]): number[][] {
  const result = [];

  // combination 인자 (초기배열, 시작인덱스)
  const combination = (arr: number[], start: number) => {
    result.push(arr);

    // 시작인덱스부터 끝까지 반복 (0 / 0,1,2) (1 / 1,2) (2 / 2)
    for (let i = start; i < nums.length; i++) {
      combination([...arr, nums[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
};

/**
arr [] / start 0 => [ [] ]
arr [ 1 ] / start 1 => [ [], [ 1 ] ]
arr [ 1, 2 ] / start 2 => [ [], [ 1 ], [ 1, 2 ] ]
arr [ 1, 2, 3 ] / start 3 => [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ] ]
arr [ 1, 3 ] / start 3 => [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ] ]
arr [ 2 ] / start 2 => [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ] ]
arr [ 2, 3 ] / start 3 => [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ] ]
arr [ 3 ] / start 3 => [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]
 */
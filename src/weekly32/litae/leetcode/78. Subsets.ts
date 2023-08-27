function subsets(nums: number[]): number[][] {
  const result: number[][] = [[]];

  for (const num of nums) {
    const temp: number[][] = [];
    for (const interim of result) {
      temp.push([...interim, num]);
    }
    result.push(...temp);
  }

  return result;
}

// Input: nums = [1, 2, 3];

// 초기값
// nums: [1, 2, 3];
// result: [[]];

// num: 1
// temp: []
// temp에 [1] 추가
// result: [[], [1]]

// num: 2
// temp: []
// temp에 [[2]], [[1, 2]] 추가
// result: [[], [1], [2], [1, 2]]

// num: 3
// temp: []
// temp에 [[3], [1, 3], [2, 3], [1, 2, 3]] 추가
// result: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// https://leetcode.com/problems/subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const result = [[]];

  for (let i = 0; i < nums.length; i++) {
    const resultLength = result.length;

    for (let j = 0; j < resultLength; j++) {
      result.push([...result[j], nums[i]]);
    }
  }
  return result;
};

console.log(subsets([1, 2, 3]));

// [
//   [],       [ 1 ],
//   [ 2 ],    [ 1, 2 ],
//   [ 3 ],    [ 1, 3 ],
//   [ 2, 3 ], [ 1, 2, 3 ]
// ]

// 매개변수
// nums : number 타입을 요소로 갖는 배열

// 출력
// nums 배열의 정수 요소들로 만들 수 있는 모든 부분집합을 요소로 갖는 배열

// 문제 설명 및 해결
// nums 배열의 정수 요소들로 만들 수 있는 모든 부분집합 요소를 구하는 문제이다.
// result 배열에 빈 배열을 요소로 넣어주고 for문을 통해 nums 배열의 요소를 순회한다.
// 그리고 이중 for문을 사용해서 result 배열의 길이만큼 반복하면서 result 배열의 요소들을 복사하고
// nums 배열의 요소를 복사한 배열에 넣어준다.
// 이렇게 하면 nums 배열의 요소들로 만들 수 있는 모든 부분집합을 구할 수 있다.

// https://leetcode.com/problems/longest-increasing-subsequence/submissions/891968350/

const lengthOfLIS = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (result.length === 0) {
      result.push(curr);
      continue;
    }

    if (curr > result[result.length - 1]) {
      result.push(curr);
      continue;
    }

    let j = 0;
    while (curr > result[j]) {
      j++;
    }
    result[j] = curr;
  }
  return result;
};

// 문제 설명 및 해결
// 정수로 이루어진 배열에서 연속적으로 증가하는 숫자 배열의 길이를 구하는 문제
// for 루프를 통해 주어진 배열을 순회하였고, result 배열이 비어있는 경우(= nums 배열의 첫번째 인자)
// result 배열에 push를 해주었고, nums 배열의 이후 인자들은 result 배열의 마지막 인자와 값을 비교하여
// 마지막 인자보다 큰 경우, 바로 push를 해주었고, 반대의 경우, while문을 통해 해당 값이 위치할 인덱스를 찾아서
// result 배열에 위치시킨다. 예를 들어 result 배열 = [10], 현재 비교값이 9 인 경우,
// result 배열은 결과적으로 [9]가 되어야하기 때문에, result[0] = 9 로 변경.
// 다음 result 배열 [2, 5], 현재 값 3 인 경우, result 배열은 [2, 3]이 되어야 하기 때문에,
// 5의 위치(result[1])에 3을 넣어주는 방식으로 문제 해결.

// 시간복잡도 O(nlogn 또는 n^2)예상...
// runtime 62ms, memory 42MB

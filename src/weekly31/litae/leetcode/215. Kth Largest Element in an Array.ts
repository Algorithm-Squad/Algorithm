// 방법 1.
export function findKthLargest1(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a)[k - 1];
}

// 풀이 1.
// 1. 주어진 배열 nums를 sort를 이용하여 내림차순으로 정렬
// 2. k번째 큰 수를 구하기 위에 내림차순으로 정렬된 nums의 k-1번째 수

// 문제점
// 1. 테스트는 통과하지만 배열을 정렬하는 데에 O(n log n)의 시간 복잡도가 소요
// 2. 최적화된 방법이 아니다

// 방법 2.
export function findKthLargest2(nums: number[], k: number): number {
  const sort = quickSort(nums);
  return sort[k - 1];
}

const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const leftOfPivot: number[] = [];
  const rightOfPivot: number[] = [];

  for (let i = 1; i < array.length; i++) {
    pivot > array[i] ? rightOfPivot.push(array[i]) : leftOfPivot.push(array[i]);
  }

  const sortLeftOfPivot: number[] = quickSort(leftOfPivot);
  const sortRightOfPivot: number[] = quickSort(rightOfPivot);

  return [...sortLeftOfPivot, pivot, ...sortRightOfPivot];
};

// 퀵소트를 해보려고 했으나 29번째 케이스에서 메모리 오류 발생.....
// 다시 퀵소트 해봐야겠다

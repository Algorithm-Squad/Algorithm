export function searchRange(nums: number[], target: number): number[] {
  const result: number[] = [];
  const firstIndex = nums.indexOf(target);

  if (firstIndex !== -1) {
    result.push(firstIndex);
    result.push(nums.lastIndexOf(target));
  } else {
    result.push(-1, -1);
  }

  return result;
}

// 풀이 방법
// 1. indexOf를 통해 첫 번째 인덱스를 찾고 결과 배열에 추가
// 2. lastIndexOf로 마지막 인덱스를 찾고 결과 배열에 추가
// 3. index가 존재하지 않는 경우에는 -1, -1를 추가

// !!문제!!
// indexOf와 lastIndexOf는 시간복잡도 O(n)이지만 풀이 조건은 시간복잡도 O(log n)
// 새로운 방법이 필요 => 이진탐색

export function searchRange(nums: number[], target: number): number[] {
  const result: number[] = [-1, -1];

  const binarySearch = (
    arr: number[],
    target: number,
    findFirst: boolean
  ): number => {
    let low = 0;
    let high = arr.length - 1;
    let resultIndex = -1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (arr[mid] === target) {
        resultIndex = mid;

        if (findFirst) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return resultIndex;
  };

  result[0] = binarySearch(nums, target, true);
  result[1] = binarySearch(nums, target, false);

  return result;
}

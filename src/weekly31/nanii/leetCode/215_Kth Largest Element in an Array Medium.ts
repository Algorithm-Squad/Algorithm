/**
 * 215. Kth Largest Element in an Array / Medium
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param nums
 * @param k
 */
function findKthLargest(nums: number[], k:number): number {
  const quickSelect = (arr: number[], left: number, right: number, targetIndex: number): number => {
    // 왼쪽, 오른쪽 크기가 같으면 배열의 길이가 1이므로 해당 요소가 가장 큰 값
    if(left === right) return arr[left];

    const pivotIndex = pivotPartition(arr, left, right);
    if(pivotIndex === targetIndex) return arr[pivotIndex];
    // 피벗위치가 타겟인덱스보다 작으면 오른쪽
    if(pivotIndex < targetIndex) return quickSelect(arr, pivotIndex + 1, right, targetIndex);
    // 피벗위치가 타겟인덱스보다 크면 왼쪽
    return quickSelect(arr, left, pivotIndex - 1, targetIndex);
  }

  const pivotPartition = (arr: number[], left: number, right: number): number => {
    const pivot = arr[right]; // 배열에서 가장 오른쪽 요소를 피벗으로 지정
    let index = left; // 피벗보다 왼쪽에 위치한 요소중 가장 큰 요소의 인덱스

    // left를 시작으로 오른쪽으로 이동
    for(let i = left; i < right; i++) {
      if(arr[i] >= pivot) {
        // 만약 피벗보다 같거나 큰 값이 있을 경우 피벗 왼쪽으로 이동
        [arr[index], arr[i]] = [arr[i], arr[index]];
        index++;
      }
    }
    // arr[index]값은 가장 오른쪽에, arr[right]값은 피벗으로 바꿔치기
    [arr[index], arr[right]] = [arr[right], arr[index]];
    return index;
  }
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}


// [1차시도] Time Limit Exceeded
// function findKthLargest(nums: number[], k: number): number {
//   // Nums 배열에서 k번째로 큰 수를 찾기
//   const sorted = [...nums]
//   for(let i = 0; i < sorted.length - 1; i++) {
//     for(let j = 0; j < sorted.length - 1 - i; j++) {
//       if(sorted[j] > sorted[j + 1]) {
//         const temp = sorted[j];
//         [sorted[j], sorted[j + 1]] = [sorted[j + 1], temp];
//       }
//     }
//   }
//   // 정렬된 순서에서 가장 k번째로 큰 요소를 반환
//   return sorted[sorted.length - k];
// };

// [2차시도] Runtime Error
// function findKthLargest(nums: number[], k: number): number {
//   // Nums 배열에서 k번째로 큰 수를 찾기
//   const quickSort = (arr: number[]): number[] => {
//     if(arr.length <= 1) return arr;
//     const pivot = arr[0];
//     const left = [];
//     const right = [];

//     for(let i = 1; i < arr.length; i++) {
//       if(arr[i]< pivot) {
//         left.push(arr[i]);
//         continue;
//       }
//       right.push(arr[i]);
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
//   }
//   const sorted = quickSort(nums);
//   return sorted[sorted.length - k];
// }
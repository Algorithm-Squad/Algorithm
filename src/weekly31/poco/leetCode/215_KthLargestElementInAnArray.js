// https://leetcode.com/problems/kth-largest-element-in-an-array/

const divide = (array, left, right, pivot) => {
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      let swap = array[left];
      array[left] = array[right];
      array[right] = swap;
      left++;
      right--;
    }
  }
  return left;
};

const quickSort = (arr, left, right) => {
  if (left >= right) return;

  if (left === undefined && right === undefined) {
    left = 0;
    right = arr.length - 1;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  const partition = divide(arr, left, right, pivot);

  quickSort(arr, left, partition - 1);
  quickSort(arr, partition, right);

  return arr;
};

const findKthLargest = (nums, k) => {
  const sortedNum = quickSort(nums);

  return sortedNum[sortedNum.length - k];
};

console.log(findKthLargest([-1, 2, 0], 1)); // expected output: 2, output: -1
// 매개변수
// nums: number 타입을 요소로 갖는 배열
// k: number 타입의 1 이상 nums.length 이하인 정수

// 출력
// nums 배열이 유지된 상태에서 k번째로 큰 수를 반환

// 문제 설명 및 해결
// quick sort를 구현해서 nums 배열을 정렬하고, nums 배열의 nums.length - k번째 인덱스의 값을 반환하면 된다.
// quick sort를 구현하는 방법은 다양하다.
// 이번 문제에서 사용한 방법은 피벗을 중간 인덱스로 설정하고, 피벗을 기준으로 왼쪽에는 피벗보다 작은 수, 오른쪽에는 피벗보다 큰 수를 위치시킨다.
// 그리고 왼쪽과 오른쪽을 각각 quick sort를 재귀적으로 호출한다.
// quick sort를 구현할 때, 피벗을 중간 인덱스로 설정하는 것이 아닌, 랜덤하게 설정하면 더욱 효율적으로 구현할 수 있다.
// 또한, 피벗을 중간 인덱스로 설정하면 최악의 경우 O(n^2)의 시간 복잡도를 가지게 되는데, 이를 방지하기 위해 퀵 정렬을 구현할 때,
//  피벗을 중간 인덱스로 설정하지 않고, 랜덤하게 설정하면 더욱 효율적으로 구현할 수 있다.
// 랜덤하게 피벗을 설정하는 방법은 다음과 같다.
// const pivot = arr[Math.floor(Math.random() * arr.length)];
// 피벗을 중간 인덱스로 설정하지 않고, 랜덤하게 설정하면 최악의 경우 O(nlogn)의 시간 복잡도를 가지게 된다.
// 그리고 quick sort를 구현할 때, 피벗을 중간 인덱스로 설정하면, 피벗을 기준으로 왼쪽에는 피벗보다 작은 수,
// 오른쪽에는 피벗보다 큰 수를 위치시킨다고 했는데,
// 이때, 피벗보다 작은 수와 피벗보다 큰 수를 위치시키는 방법은 다양하다.
// 이번 문제에서 사용한 방법은 피벗보다 작은 수는 왼쪽에서부터, 피벗보다 큰 수는 오른쪽에서부터 위치시키는 방법이다.
// 이 방법은 피벗보다 작은 수와 피벗보다 큰 수를 위치시킬 때, 서로 교차되는 경우가 발생할 수 있다.
// 이때, 교차되는 경우를 방지하기 위해 다음과 같이 구현할 수 있다.

// 처음 풀이
// 전체 nums 배열이 유지된 상태로 k번째 큰 수를 찾는게 아닌
// nums 배열에 있는 숫자들중에 k번째 큰수를 찾는 문제라고 생각함.

//function findKthLargest(nums, k) {
//   const numberObj = {};

//   nums.forEach((num) => {
//     !numberObj[num] ? (numberObj[num] = 1) : (numberObj[num] += 1);
//   });

//   const numberObjKeys = Object.keys(numberObj).reverse();

//   return numberObjKeys[k];
// }

// 두번째 풀이
// nums = [-1, 2, 0], k = 1일때, JS의 객체는 키를 문자열로 변환해서 저장하기 때문에 numberObjKeys = ["2", "0", "-1"]이 된다.
// function findKthLargest(nums, k) {
//   const numberObj = {};

//   nums.forEach((num) => {
//     !numberObj[num] ? (numberObj[num] = 1) : (numberObj[num] += 1);
//   });

//   const sortedNumberObjKeys = [];

//   for (let key in numberObj) {
//     const keyCount = numberObj[key];
//     for (let i = 0; i < keyCount; i++) {
//       sortedNumberObjKeys.push(key);
//     }
//   }
//   console.log(sortedNumberObjKeys);
//   return sortedNumberObjKeys[sortedNumberObjKeys.length - k];
// }

// console.log(findKthLargest([-1, 2, 0], 1)); // expected output: 2, output: -1

// 세번째 풀이
// const basicQuickSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }

//   const pivotArr = [arr[0]]; // 0번째 index의 값을 기준으로 정한다.
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     // pivot 값을 제외하고 값 비교
//     const value = arr[i];
//     const pivot = pivotArr[0];
//     if (value > pivot) {
//       right.push(value);
//       continue;
//     }

//     if (value < pivot) {
//       left.push(value);
//       continue;
//     }

//     pivotArr.push(value);
//   }

//   const sortedSmallerValue = basicQuickSort(left);
//   const sortedBiggerValue = basicQuickSort(right);
//   return sortedSmallerValue.concat(pivotArr, sortedBiggerValue);
// };

// const findKthLargest = (nums, k) => {
//   const sortedNum = basicQuickSort(nums);

//   return sortedNum[sortedNum.length - k];
// };

// 시간초과로 실패

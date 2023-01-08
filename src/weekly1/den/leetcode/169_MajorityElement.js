/* 시작 20:10 종료 21:06*/
/*
[ 내 풀이 ]

처음 시도한 코드
-> 통과
-> 시간 / 공간 복잡도 최악
-> Follow - up: 선형 탐색 / 공간 O(1) 조건 충족x 
*/

// var majorityElement = function (nums){
//   var elements = [];
//   var firstElement = nums[0];
//   elements.push(firstElement);

//   for(let i = 1; i < nums.length; i++){
//     if(!(elements.includes(nums[i]))){
//       elements.push(nums[i]);
//     }
//   }

//   var result = [];
//   for(let i = 0; i < elements.length; i++){
//     const filterNumber = nums.filter((element) => element === elements[i]);
//     result.push(filterNumber.length);
//   }

//   var majorityElementIndex = result.findIndex((element) => element === Math.max(...result));
//   return elements[majorityElementIndex];
// }


// console.log(majorityElement([3,2,3])); // 3
// console.log(majorityElement([2,2,1,1,1,2,2])); // 2

/*
[ 내 풀이 ]

목표: Follow up - 선형 탐색, 공간 복잡도 O(1) 충족 시켜보자.

1. Set을 이용해 nums 내 중복된 요소들을 제거한 배열 변수화.
2. 중복제거된 각각의 요소들이 nums 배열 안에 몇 개 있는지 for문과 filter를 이용해서 계산
  2.1 만약 중복제거된 요소가 nums 배열 내에 nums 길이의 반개 이상 있으면 그 요소 return

-> 통과
-> runtime 59.6%
-> Memeory 10.64%
-> 목표 충족x
*/

var majorityElement = function (nums){
  const eleminateDuplication = [...new Set(nums)];
  for(let i = 0; i < eleminateDuplication.length; i++){
    if(nums.filter((element) => element === eleminateDuplication[i]).length > nums.length / 2){
      return eleminateDuplication[i];
    }
  }
}

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
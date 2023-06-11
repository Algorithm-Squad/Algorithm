/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const obj = {};
  let answer = 0;

  nums.forEach((num) => {
    if (!obj[num]) {
      obj[num] = [num];
    } else {
      answer += obj[num].length;
      obj[num].push(num);
    }
  });
  return answer;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// 매개변수
// nums : 정수로 이루어진 배열

// 출력
// good pairs의 갯수

// 문제 설명 및 해결
// 문제에서 말하는 good pairs란?
// nums[i] === nums[j]이고 i < j 일때, i와 j
// obj 객체를 선언하고 nums 배열 요소를 순회하면서
// obj의 키값과 일치하는지 확인하고, 일치하는 내용이 이미 있다면 해당 key 값의 배열의 길이를 answer에 더해준다.
// 일치하는 내용이 없다면 해당 key 값의 배열에 요소를 추가해준다.

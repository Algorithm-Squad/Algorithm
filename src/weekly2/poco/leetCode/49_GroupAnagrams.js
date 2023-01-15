// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const groupAnagrams = function (strs) {
  const object = {};
  const result = [];

  for (let str of strs) {
    const sortedStr = str.split('').sort().join(''); // 시간복잡도 sort => O(nlog n)
    if (!object[sortedStr]) {
      object[sortedStr] = [];
    }
    object[sortedStr].push(str);
  }

  for (const key in object) {
    result.push(object[key]);
  }
  return result;
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

// 문제설명
// 순서가 바뀐 문자들이 들어있는 배열이 주어진다. 순서와 상관없이 동일 문자로 조합된 문자끼리 배열에 묶어서 반환해라

// 문제풀이
// 구성 문자열은 같고, 순서만 다른 문자들의 공통점을 찾기 위해 처음에는 아스키 코드로 접근함.
// 아스키코드 값을 key로, 빈배열을 value로 갖는 객체를 객체를 선언하고 각 문자열마다 아스키코드로 변환하여
// 객체에 해당하는 key 값에 value로 할당함. 하지만 최종제출에서 에러를 발생하였고, 해당 에러는
// 문자열 조합이 다르더라도 아스키코드 값이 동일할 수 있다는 점에서 발생
// 그래서 아스키코드값이 아닌, 각 문자열을 정렬한 상태를 객체의 key로 지정하였고 위와 동일 방식으로 문제해결
// 시간복잡도는 for of, for in 사용으로 O(n)

// const strToASCII = function (str) {
//   let sum = 0;

//   for (let i = 0; i < str.length; i++) {
//     sum += str.charCodeAt(i);
//   }
//   return sum;
// };
// const groupAnagrams = function (strs) {
//   const object = {};
//   const result = [];

//   strs.forEach((element) => {
//     const ASCII = strToASCII(element);
//     if (!object[ASCII]) {
//       object[ASCII] = [element];
//     } else {
//       object[ASCII].push(element);
//     }
//   });

//   for (const key in object) {
//     result.push(object[key]);
//   }
//   return result;
// };

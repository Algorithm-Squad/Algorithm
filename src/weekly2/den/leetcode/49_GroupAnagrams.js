/* 1/13(금) 09:10 시작*/
/*
[내 풀이]
첫 번째 시도
- 구현 실패: 시간 초과
- 원인
for문을 돌면서 매번 input값을 filter하는 동작을 해서, 
시간 복잡도가 늘어나 시간 초과가 발생한 것으로 추정된다.

- 시간 복잡도
O(N^2)(for문 + filter) + O(1)(추정, Set 객체) = O(N^2)
*/

var groupAnagrams = function(strs) {
  var answer = [];

  for(let i = 0; i < strs.length; i++){
    const anagrams = strs.filter((element) => element.split("").sort().join() === strs[i].split("").sort().join());
    answer.push(anagrams);
  }
  
  var removeDup = [...new Set(answer.map(e => e.join(",")))];
  return removeDup.map((element) => element.split(","));
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));

/*
[내 풀이]
두 번째 시도: 시간 초과
-> 구현 실패
*/

// var groupAnagrams = function(strs) {
//   var sortStrs = strs.map((element) => element.split("").sort().join());
//   var removeDup = [...new Set(sortStrs)];

//   var result = [];
//   for(let i = 0; i < removeDup.length; i++){
//     const anagrams = strs.filter((element) => element.split("").sort().join() === removeDup[i]);
//     result.push(anagrams);
//   }
//   return result;
// }

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));

/*
[내 풀이x]
*/

// var groupAnagrams = function (strs) {

//   const obj = {};
  
//   for (const str of strs) {
//     const sorted = str.split('').sort().join('');

//     if (!obj[sorted]) {
//       obj[sorted] = [str];
//     } else {
//       obj[sorted].push(str);
//     }
//   }
  
//   return Object.values(obj);
// };

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams([""]));
// console.log(groupAnagrams(["a"]));
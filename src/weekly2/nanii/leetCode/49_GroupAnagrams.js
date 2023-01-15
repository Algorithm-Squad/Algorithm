/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * 문제 해석 : 주어진 문자열 배열을 각각의 애너그램 그룹 배열로 반환
 * 배열 내 문자열구성이 일치하는 그룹끼리 묶기
 * (1) 문자열의 알파벳들을 Key = str[i]
 * (2) map.has(key)? map.set(key, value) =>>>>>> map.get(key).push(value);
 * (#) [...string] = string.split('') 의 기능
 * 시간복잡도 : O(n) [Runtime 129 ms] [Beats 78.55%]
 * 공간복잡도 : [Memory 52.6 MB] [Beats 75.19%]
 *
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
  const group = new Map();
  for(const str of strs) {
    let strKey = [...str].sort().join('');
    if(!group.has(strKey)) group.set(strKey, []); //key로 []빈 그룹을 생성 { 'aet' => [], 'ant' => [], 'abt' => [] }
    //map객체의 value여러개 담는 방법
    group.get(strKey).push(str); // 'aet' => [ 'eat', 'tea', 'ate' ],'ant' => [ 'tan', 'nat' ],'abt' => [ 'bat' ]
  }
  return [...group.values()];
};

// var groupAnagrams = function(strs) {
//   const group = {};
//   for(const str of strs) {
//     let key = str.split('').sort().join('');
//     if(group[key]) group[key].push(str); //key가 이미 존재하면 그 그룹에 넣기 위해 push(string);
//     else group[key] = [str]; //key가 없으면 [string]넣고,
//   }
//   return Object.values(group);
// };
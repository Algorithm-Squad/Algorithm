/**
 * 문제 출처: https://leetcode.com/problems/valid-anagram/description/
 * 
 * 시작시간: 17:30
 * 종료시간: 17:40
 */


function isAnagram(s: string, t: string): boolean {
  if(s.length != t.length) return false;

  const hashMap = {};

  for(const char of s) {
    if(hashMap[char]){
      hashMap[char]++
    } else {
      hashMap[char] = 1
    }
  }

  for(const char of t) {
    if(hashMap[char]) {
      hashMap[char]--
    } else {
      return false;
    }
  }

  return true;
};
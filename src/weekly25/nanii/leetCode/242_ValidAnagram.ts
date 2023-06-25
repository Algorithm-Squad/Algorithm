/**
 * 242. Valid Anagram / Easy
 * https://leetcode.com/problems/valid-anagram/
 * @param s
 * @param t
 * @returns 두 문자열을 비교하여 애너그램이 맞는지 확인
 */
function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false;
  let map = new Map();
  [...s].forEach((str) => {
    map.set(str, map.has(str) ? map.get(str) + 1 : 1);
  });
  for(const str of [...t]){
    if(!map.has(str) || map.get(str) <= 0) return false
    else map.set(str, map.get(str) - 1);
  }
  return true;
}
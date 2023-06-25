// 1. 배열을 이용한 풀이

export function isAnagram1(s: string, t: string): boolean {
  const firstWord = s.split("").sort().join("");
  const secondWord = t.split("").sort().join("");

  return firstWord === secondWord;
}

// 2. 해시 테이블을 이용한 풀이
export function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const object: { [key: string]: number } = {};

  for (let char of s) {
    object[char] = object[char] + 1 || 1;
  }

  for (let char of t) {
    if (!object[char]) return false;
    object[char]--;
  }

  return true;
}

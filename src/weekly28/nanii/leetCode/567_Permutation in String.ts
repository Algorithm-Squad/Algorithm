/**
 * 567. Permutation in String / Medium
 * https://leetcode.com/problems/permutation-in-string/
 * 슬라이딩윈도우 알고리즘 이용하기
 * s1의 알파벳 사용횟수를 더하는 동시에 s2같이 진행하면서 사용된 회수를 더해줌
 * @param s1 문자열
 * @param s2 문자열
 * @returns s2에 s1의 순열이 있는지 여부
 * 순열에 존재하는 조건 : 순서에 상관없이 substring을 구성하는 문자가 존재하고, 띄엄띄엄이 아니라 순차적으로 존재해야됨
 */
function checkInclusion(s1: string, s2: string): boolean {
  const s1Map: Map<string, number> = new Map();
  const s2Map: Map<string, number> = new Map();
  // s1 알파벳의 사용횟수 카운팅
  [...s1].forEach((s: string) => {
    s1Map.set(s, s1Map.get(s) ? s1Map.get(s) + 1 : 1);
  });

  let start = 0;
  for(let end = 0; end < s2.length; end ++) {
    const endChar = s2.charAt(end);
    s2Map.set(endChar, s2Map.get(endChar) ? s2Map.get(endChar) + 1 : 1);
    if(end + 1 >= s1.length) {
      if(isSameMap(s1Map, s2Map)) return true;
      const startChar = s2.charAt(start++);
      s2Map.set(startChar, s2Map.get(startChar) - 1);
      if(s2Map.get(startChar) === 0) s2Map.delete(startChar);
    }
  }
  return false;
};

const isSameMap = (s1Map: Map<string, number>, s2Map: Map<string, number>): boolean => {
  if(s1Map.size !== s2Map.size) return false;
  for(let [key, value] of s1Map) {
    if(s2Map.get(key) !== value) return false;
  }
  return true;
}

// 첫번째 방법 (실패)
// function checkInclusion(s1: string, s2: string): boolean {
//   const s1Set: Set<string> = new Set();

//   const permutation = (result:string, others:string) => {
//     if(result !== '' && s1.length === result.length) s1Set.add(result);
//     for(let i = 0; i < others.length; i ++) {
//       permutation(result + others.charAt(i), others.substring(0, i) + others.substring(i + 1));
//     }
//   }
//   permutation('', s1);
//   return [...s1Set].some((s1: string) => s2.includes(s1));
// };
// console.log(checkInclusion("trinitrophenylmethylnitramine", "dinitrophenylhydrazinetrinitrophenylmethylnitramine"));
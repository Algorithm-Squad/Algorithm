/**
 * 139. Word Break / Medium
 * https://leetcode.com/problems/word-break/
 * @param s 주어진 문자열
 * @param wordDict 조합가능한 단어배열
 * @returns s를 wordDict의 단어들로 조합할 수 있는지 여부
 * s를 순회하면서 아무튼 0번째 인덱스부터 시작하는 단어가 있어야하므로 slice(0, i)로 시작
 * wordDict배열에서 s에 포함되는 단어가 있는지 확인하고,
 * 포함되는 단어가 있으면 s에서 해당 단어를 제거한뒤 재귀호출한다.
 * 재귀호출이 끝났을 때 s의 길이가 0이면 true, 아니면 false를 반환한다.
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  const wordDictSet = new Set(wordDict);
  const memo = {}; // slice한 단어

  const check = (index: number): boolean => {
    if (s.length === index) return true;
    // 이미 계산한 인덱스 인지 확인
    if (memo[index]) return false;

    for (let i = index; i < s.length; i++) {
      const word = s.slice(index, i + 1);
      // 단어가 있고, 그럼 그 다음 인덱스 부터 확인
      if (wordDictSet.has(word) && check(i + 1)) {
        return true;
      }
    }
    memo[index] = true;
    return false;
  };
  return check(0);
}

/**
Index / memo {}
7 { '7': true }
3 { '3': true, '7': true }
4 { '3': true, '4': true, '7': true }
0 { '0': true, '3': true, '4': true, '7': true }
 */
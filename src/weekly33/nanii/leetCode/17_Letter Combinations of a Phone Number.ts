/**
 * 17. Letter Combinations of a Phone Number / Medium
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param digits
 * @returns
 */
function letterCombinations(digits: string): string[] {
  const mapOfDigits = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }

  const result: string[] = [];

  // n의 digits의 인덱스, str은 누적된 문자열
  const dfs = (n: number, str: string) => {
    if(n === digits.length) {
      // 누적된 문자열이 있으면 result에 push, 없으면 result 리턴
      return str.length ? result.push(str) : result;
    }

    const button = digits[n];
    const letters = mapOfDigits[button];

    // digits의 n번째 버튼에 해당하는 문자열 배열을 순회하면서 dfs 재귀하면서 문자열을 누적
    for(let i = 0 ; i < letters.length; i++) {
      // n + 1은 다음 버튼, str + letters[i]는 누적된 문자열
      dfs(n + 1, str + letters[i]);
    }
  }
  // 0부터 & 빈 문자열부터 시작
  dfs(0, '');
  return result;
};
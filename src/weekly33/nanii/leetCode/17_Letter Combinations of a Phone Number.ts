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
  const dfs = (n: number, str: string) => {
    if(n === digits.length) {
      return str.length ? result.push(str) : result;
    }

    const button = digits[n];
    const letters = mapOfDigits[button];
    for(let i = 0 ; i < letters.length; i++) {
      dfs(n + 1, str + letters[i]);
    }
  }
  dfs(0, '');
  return result;
};
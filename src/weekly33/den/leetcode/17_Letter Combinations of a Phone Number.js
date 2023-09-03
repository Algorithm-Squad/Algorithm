/**
 * 시작시간: 16:35
 * 종료시간: 17:05
 * 문제출처: https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=study-plan-v2&envId=top-100-liked
 */

/**
 * @param {string} digits
 * @return {string[]}
 */

const letterCombinations = (digits) => {
  if (!digits.length) return [];
  const answer = [];

  const data = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const dfs = (str, index) => {
    if (str.length === digits.length) {
      answer.push(str);
    } else {
      const targetLetters = data[digits[index]];

      targetLetters.forEach((letter) => dfs(str + letter, index + 1));
    }
  };
  dfs("", 0);

  return answer;
};

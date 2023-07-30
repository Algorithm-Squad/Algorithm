/**
 * 문제출처: https://leetcode.com/problems/longest-common-subsequence/
 * 시작시간: 10:30
 * 종료시간: 11:30
 * 결과: 실패
 */

function longestCommonSubsequence(text1: string, text2: string): number {
  let answer = 0;
  const targetText = text1.length <= text2.length ? text1.split("") : text2.split("");
  const otherText = text1.length > text2.length ? text1.split("") : text2.split("");

  let targetIndex = targetText.length - 1;

  while(otherText.length > 0){
    for(let i = otherText.length - 1; i >= 0; i--){
      if(otherText[i] === targetText[targetIndex]) {
        targetText.pop();
        targetIndex = targetIndex - 1;
        answer += 1;
      }
    }
    otherText.pop();
  }
  return answer;
};

console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc")); // 3
console.log(longestCommonSubsequence("abc", "def")); // 0
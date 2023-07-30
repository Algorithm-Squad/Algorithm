// https://leetcode.com/problems/longest-common-subsequence/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  let dp = Array(text1.length + 1)
    .fill(0)
    .map(() => Array(text2.length + 1).fill(0));

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
};

// text1 : acd
// text2: abcd

// 매개변수
// text1: 문자열
// text2: 문자열

// 출력
// number: 가장 긴 공통 부분 문자열의 길이

// 문제 설명 및 해결
// 1. text1과 text2의 길이를 비교하여 더 긴 문자열의 길이를 dp의 행으로, 더 짧은 문자열의 길이를 dp의 열로 설정한다.
// 2. dp의 행과 열의 길이는 각각 1을 더하여 설정한다.( dp[i][j] = dp[i - 1][j - 1] + 1에서 i - 1과 j - 1이 0이 되는 경우를 고려하기 위함이다.)
// 3. dp의 행과 열을 0으로 초기화한다.
// 4. text1의 문자열을 순회하면서 text2의 문자열을 순회한다.
// 5. text1의 문자열과 text2의 문자열이 같으면 dp[i][j] = dp[i - 1][j - 1] + 1이다.
// 6. text1의 문자열과 text2의 문자열이 다르면 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])이다.
// 7. dp[text1.length][text2.length]를 반환한다.

// =====================================================================================================================

// 최초 풀이
// 길이가 같은 두 문자열에서 일치한 문자를 하나 찾게되면, matchedIndex가 올라가게되면서,
// 그 뒤에 나오는 문자들을 계산할 수 없다
// 예를 들어, 아래 예시에서 "oxcp"의 "p"를 찾게되면,
// "qr"을 찾을 수 없다
// const longestCommonSubsequence = (text1, text2) => {
//   const answer = [];

//   let shortText, longText;

//   if (text1.length <= text2.length) {
//     shortText = text1;
//     longText = text2;
//   } else {
//     shortText = text2;
//     longText = text1;
//   }

//   let shortTextIndex = 0;
//   let longTextIndex = 0;
//   let matchedIndex = 0;

//   while (shortTextIndex < shortText.length) {
//     if (longTextIndex > longText.length) {
//       shortTextIndex++;
//       longTextIndex = matchedIndex;
//     }
//     if (shortText[shortTextIndex] === longText[longTextIndex]) {
//       answer.push([longTextIndex, shortText[shortTextIndex]]);
//       shortTextIndex++;
//       longTextIndex++;
//       matchedIndex = longTextIndex;
//     } else {
//       longTextIndex++;
//     }
//   }

//   return answer.length;
// };
// console.log(longestCommonSubsequence('oxcpqrsvwf', 'shmtulqrypy'));

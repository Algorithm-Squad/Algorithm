/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits.length) return [];

  const strObj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (digits.length === 1) return strObj[digits[0]].map((v) => v);

  let result = [];

  function permute(string, index) {
    if (index === digits.length) {
      result.push(string);
      return;
    }

    for (let newString of strObj[digits[index]]) {
      permute(string + newString, index + 1);
    }
  }
  permute('', 0);
  return result;
};

console.log(letterCombinations('234'));

// 매개변수
// digits : 2에서 9까지의 숫자를 입력받는다.

// 출력
// 2에서 9까지의 숫자를 입력받아 만들 수 있는 모든 문자 조합을 배열로 반환한다.

// 문제 설명 및 해결
// 번호판이 존재할 때, 각 숫자(1과 0 제외)마다 문자들이 존재한다.
// digits는 2~9까지의 숫자를 입력 받을 때, 각 숫자들을 입력했을 때 만들 수 있는 모든 문자 조합을 배열로 반환하는 문제이다.
// 먼저 digits의 길이가 0일때는 빈 배열을 return을 해주고, 2~9에 해당하는 각 문자열을 요소로 하는 배열을 value로
// 갖는 strObj를 만든다.
// digits의 길이가 1일때는 strObj[digits[0]]을 map 하여 return 해주고,
// digits의 길이가 2이상일 때는 재귀를 통해 모든 문자 조합을 구한다.
// permute 함수를 만들어, string과 index를 매개변수로 받는다.
// index가 digits의 길이와 같아지면 result에 string을 push하고 return한다.
// index가 digits의 길이와 같지 않다면, strObj[digits[index]]를 순회하며
// permute(string + newString, index + 1)을 재귀적으로 호출한다.
// 즉, 다음 digits의 다음 index의 문자열들을 하나씩 더하는 과정을 진행하는 것이다.

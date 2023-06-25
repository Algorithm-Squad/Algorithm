// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sArr = s.split('');
  const tArr = t.split('');

  sArr.sort();
  tArr.sort();

  return !sArr.some((element, index) => element !== tArr[index]);
};

// 매개변수
// s : 문자열
// t : 문자열

// 출력
// boolean (s와 t가 anagram이면 true, 아니면 false)

// 문제 해결 및 설명
// 문자열 s와 t가 주어지고, s와 t가 anagram이면 true, 아니면 false를 반환하는 문제
// anagram이란 문자열을 재배열해서 다른 문자열을 만드는 것을 의미
// 따라서, s와 t의 길이가 다르면 false를 반환

// s와 t를 sorting해서 문자열을 순회하면서 비교하는 방법
// hash 테이블 사용해서, 각 문자열 갯수를 비교하는 방법

// s, t를 각각 split으로 배열화 및 sorting 후, 순회하면서 비교

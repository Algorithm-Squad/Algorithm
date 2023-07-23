// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const checkInclusion = function (s1, s2) {
  const s1Hash = {};

  for (let i = 0; i < s1.length; i++) {
    s1Hash[s1[i]] = s1Hash[s1[i]] ? s1Hash[s1[i]] + 1 : 1;
  }

  // s1Hash의 key들을 배열로 만들어준다
  const s1HashKeys = Object.keys(s1Hash);

  for (let i = 0; i < s2.length; i++) {
    // s1HashKeys에 s2[i]가 포함되어 있고, 해당 s1Hash의 value가 0보다 크다면
    if (s1HashKeys.includes(s2[i])) {
      // s1 문자열이 연속된 상태로 전체 있는지 확인하기 위해서 temp Hash 만들기
      const tempS1Hash = { ...s1Hash };
      let tempIndex = i;

      // 임시 인덱스가 s2 길이보다 작고, tempS1Hash[s2[tempIndex]]가 0보다 크다면
      while (tempIndex < s2.length && tempS1Hash[s2[tempIndex]]) {
        tempS1Hash[s2[tempIndex]]--;
        tempIndex++;
      }
      // while 문이 종료되면 if 조건문 확인
      // 임시 s1Hash의 모든 value가 0이면 s2 안에 속해있다는 뜻이기 때문에 true
      if (Object.values(tempS1Hash).every((v) => v === 0)) return true;
    }
  }

  return false;
};

// 매개변수
// s1 : 문자열
// s2 : 문자열

// 출력
// s2가 s1의 순열을 포함하고 있는지 여부

// 문제 해결 및 설명
// Hash를 이용한 풀이
// s1의 문자열을 Hash로 만들어준다
// s2 전체를 for문으로 순회하면서, s1Hash에 s2[i]가 포함되어 있는지 확인한다
// s1Hash에 s2[i]가 포함되어 있다면, s1의 문자열이 연속해서 모두 들어있는지 확인하기 위해
// 임시 객체을 만들고 while문을 통해 i를 하나씩 증가해가면서 임시 객체의 s2 문자열에 해당하는 key의 value를 하나씩 줄여준다
// while문이 종료되고, 임시객체의 모든 키값의 값이 0인지 확인을 하고, 0이라면 true를 반환하고,
// 아니라면 다음 for문의 i를 확인한다

// 최초 도전 풀이
// 문제 해결 및 설명
// s1의 순열을 구하고 s2에 포함되어 있는지 여부를 판단하는 문제
// s1의 순열을 구하는 방법은 dfs를 사용하면 된다
// s1의 순열을 구하고 s2에 포함되어 있는지 여부를 판단하는 문제

// s1의 문자열들이 떨어져있는 경우에 대해서는 판단하지 못한다

// const getPermutation = (str) => {
//   const answer = [];

//   const dfs = (str, arr) => {
//     if (str.length === 0) {
//       answer.push(arr.join(''));
//       return;
//     }

//     for (let i = 0; i < str.length; i++) {
//       const temp = str[i];
//       arr.push(temp);
//       dfs(str.slice(0, i) + str.slice(i + 1), arr);
//       arr.pop();
//     }
//   };

//   dfs(str, []);

//   return answer;
// };

// const checkInclusion = function (s1, s2) {
//   const s1Permutations = getPermutation(s1);
//   const s2Permutations = getPermutation(s2);

//   for (let i = 0; i < s2Permutations.length; i++) {
//     for (let j = 0; j < s1Permutations.length; j++) {
//       console.log(s2Permutations[i], s1Permutations[j]);
//       if (s2Permutations[i].includes(s1Permutations[j])) return true;
//     }
//   }

//   return false;
// };

// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  let answer = 0;

  s = s.replace(/zero/g, 0);
  s = s.replace(/one/g, 1);
  s = s.replace(/two/g, 2);
  s = s.replace(/three/g, 3);
  s = s.replace(/four/g, 4);
  s = s.replace(/five/g, 5);
  s = s.replace(/six/g, 6);
  s = s.replace(/seven/g, 7);
  s = s.replace(/eight/g, 8);
  s = s.replace(/nine/g, 9);

  answer = Number(s);
  return answer;
}

// 매개변수
// s : 숫자 문자열

// 출력
// 매개변수 s가 의미하는 원래 숫자를 return

// 문제 설명 및 해결
// 문자열 s 중에 숫자가 아닌 문자열로 표시된 부분을 숫자로 변경하는 문제
// 정규표현식을 사용해서 s의 문자열들을 해당하는 숫자로 변형한 뒤 return해서 해결
// 처음 풀이에는 객체에 각 문자열에 해당하는 숫자를 먼저 저장하고 매개변수 s를 순회하는 방식을 사용했는데
// 테스트 7, 8, 9를 통과하지 못하였고 예외사항에 대해서 찾지 못하였고 정규표현식을 사용해서 풀이하는 방법으로 선회

// 처음 풀이
// function solution(s) {
//   let result = '';
//   let temp = '';

//   const numObj = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   for (let i = 0; i < s.length; i++) {
//     const str = s[i];
//     if (!isNaN(str)) {
//       result += str;
//     } else if (isNaN(str)) {
//       temp += str;
//     }

//     if (numObj[temp]) {
//       result += numObj[temp];
//       temp = '';
//     }
//   }

//   return Number(result);
// }

// 참고 풀이

// function solution(s) {
//     let charSet = {
//         "zero" : 0,
//         "one" : 1,
//         "two" : 2,
//         "three" : 3,
//         "four" : 4,
//         "five" : 5,
//         "six" : 6,
//         "seven" : 7,
//         "eight" : 8,
//         "nine" : 9,
//     }

//     for(let [key, value] of Object.entries(charSet)) {
//         let re = new RegExp(`${key}`,"g");
//         s = s.replace(re, value);
//     }
//     return parseInt(s);
// }

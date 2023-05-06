/**
 * 숫자문자열과 영단어 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/81301
 * @param s 일부가 변형된 문자열
 * @returns 원래의 숫자
 */
function solution(s: string) :number {
  const numberOption = {
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    0:"zero",
};

let answer = '';
let number = '';
  for(let i = 0; i < s.length; i++) {
    var str = s[i];
    if (numberOption.hasOwnProperty(str)) {
      answer += str;
    } else number += str;
    if(Object.values(numberOption).includes(number)) {
      const key = Object.keys(numberOption).find(key => numberOption[key] === number);
      answer += key;
      number = '';
    }
  }
  return Number(answer);
}
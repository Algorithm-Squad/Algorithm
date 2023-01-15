/**
 * 신규아이디추천 [Lv1]
 * https://school.programmers.co.kr/learn/courses/30/lessons/72410
 *
 * 문제해석 : 문자열이랑 문자의 배열
 * 주어진 조건에 맞는 함수를 각각 만들고, 순차적으로 값을 전달받아 함수를 실행하게끔 구현
 *
 * 문자열은 끝을 나타내는 종단문자 '\0'을 사용하여 문자열의 끝을 나타내므로 (= null-terminator 널종단)
 * 문자열길이 + 1 byte 씩 공간을 차지(낭비)하게 된다
 *
 * 시간복잡도 : 문자열을 꼭 써야되는 문제가 아니면 문자열 처리는 숫자보다 평균 10배정도 느리고, 메모리공간도 더 차지한다고함
 * 공간복잡도 :
 */

 function solution(new_id) {
  const regex = /[`~!@#$%^&*()|+\=?;:,'"<>\{\}\[\]\\\/ ]/gim; //지정특수문자 외 제거
  const dotRegex = /\.{2,}/g; //'.'2번 이상 확인
  const id = new_id.toLowerCase().replaceAll(regex, '').replaceAll(dotRegex, '.');

  const step1 = trimDot(id);
  const step2 = isEmpty(step1);
  const step3 = validLength(step2);
  return step3;
}

function trimDot(id) {
  if(id.charAt(0) === '.') id = id.slice(1, id.length);
  if(id.charAt(id.length - 1) === '.') id = id.slice(0, id.length - 1);
  return id;
}

function isEmpty(id) {
  return id.length === 0 ? id = 'a' : id;
}

function validLength(id) {
  if(id.length > 15) id = id.slice(0, 15);
  while(id.length < 3) {
    id += id[id.length - 1].repeat(1);
  }
  return id[id.length - 1] === '.'? id = id.slice(0, id.length - 1) : id;
}

// const new_id = "...!@BaT#*..y.abcdefghijklm";
// const new_id = "z-+.^."
// const new_id = "=.="
// const new_id = "abcdefghijklmn.p";
const new_id = '-.~!@#$%&*()=+[{]}:?,<>/.-';
console.log(solution(new_id));
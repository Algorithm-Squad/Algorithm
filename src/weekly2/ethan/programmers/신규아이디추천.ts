/*
  [v] 문제 이해 : 아이디 규칙에 벗어난 아이디를 주면, 입력된 아이디와 유사하면서 규칙에 맞는 아이디로 바꿔 아이디를 결과로 반환한다.
  규칙은 총 7개로 다음과 같이 순서에 맞게 replace함수를 이용해서 정규 표현식을 적용하고, 체인으로 결과 값에 이어서 계속
  적용해서 최종 값을 담은 변수를 반환하는 식으로 문제를 접근했다.

  [v] 규칙 1. 모든 대문자를 대응되는 소문자로 바꾼다. reg >> [A-Z] 
  [v] 규칙 2. 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자를 제거한다. reg >> [^A-Z\d-_.]
  [v] 규칙 3. 마침표(.) 가 2번 이상 연속된 부분을 하나의 마침표로 바꾼다. reg >> /[.]{2,}/
  [v] 규칙 4. 마침표(.)가 처음이나 끝에 위치하면 제거한다. reg >> /^\.|\.$/
  [v] 규칙 5. 빈 문자열이면 a를 대입 reg >> /^$/
  [v] 규칙 6. 길이가 16자 이상이면, 앞에 15개를 제외한 나머지 문자 제거 >> slice(0, 15)
    - 제거 후 마침표가 끝에 위치하는 경우 마침표 문자도 제거. reg >> /\.$/
  [v] 규칙 7. 길이가 2 이하면, 마지막 문자를 길이가 3될 때까지 반복해서 끝에 붙인다.
    len <= 2 ? answer.padEnd(3, answer[len - 1]) : answer
    또는 answer + answer.charAt(len - 1).repeat(3 - len);
*/
function solution(new_id: string) {
  const answer = new_id
    .replace(/[A-Z]/g, (item) => item.toLowerCase())
    .replace(/[^\w\d-_.]/g, '')
    .replace(/[.]{2,}/g, '.')
    .replace(/^\.|\.$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  let len = answer.length;
  return len <= 2 ? answer.padEnd(3, answer[len - 1]) : answer;
}
console.log(solution('...!@BaT#*..y.abcdefghijklm')); // "bat.y.abcdefghi"
console.log(solution('z-+.^.')); // "z--"

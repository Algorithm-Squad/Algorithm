/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/81301
 * 
 * 시작시간: 10:50
 * 종료시간: 11:20
 * 
 * 1. 매개변수 문자열 for문 돌면서 숫자 여부 판단.
 *  - 숫자면 answer 문자열에 더하고,
 *  - 타입이 String이면, 검증 문자열에 더한다.
 *    - 검증 문자열에 맞는 숫자를 표에서 찾는다.
 *      - 있으면, answer 문자열에 더하고, 검증 문자열 ''로 reset한다.
 *      - 없으면, continue
 * 
 * 2. for문 끝나면 answer 문자열을 숫자 타입으로 변환하고 반환한다.
 */

// 인덱스 시그니처(index signature)
type NumberStringTable = {
  [key: string]: string;
}

function solution(string: string) :number {
  const numberStringTable : NumberStringTable = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  }

  let answer :string = '';
  let stringToValid :string = '';

  for(let i = 0; i < string.length; i++){
    const char :string = string[i];
    if(!Number.isNaN(Number(char))) {
      answer += char;
    } else {
      stringToValid += char;
      if(numberStringTable[stringToValid]) {
        answer += numberStringTable[stringToValid];
        stringToValid = '';
      }
    }
  }
  return Number(answer);
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 123
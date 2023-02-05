/**
 * 가장큰수 Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42746
 * 문제 해석 : 배열의 요소를 비교하여 내림차순으로 정렬한 뒤 문자열로 반환
 * 이때 핵심은 '3', '30' 을 비교했을 때 [30, 3] 이 더 큰 수이지만
 * 문자열로 연결했을땐 303 보다 330 이 더 큰 숫자이므로 => [3, 30] 으로 반환해야 함
 * sort 메소드를 문자열로 연결한 값을 서로 비교해야 함이 관건 ⭐️
 *
 * 내림차순정렬 (a, b) => b - a
 *
 * 시간복잡도 : O(n) + O(nlogn)
 * sort 함수는 입력의 크기가 커질 경우 효율적으로 정렬하기 위해
 * 퀵 정렬과 같은 진화된 정렬 방식을 사용하기 때문에 O(N log N)의 시간 복잡도를 가짐
 *
 * @param {*} numbers
 * @returns {*} string
 */
 function solution(numbers) {
  const answer = numbers.map(String)
    .sort((a, b) => (b + a) - (a + b))
    .join('');
  return parseInt(answer) === 0 ? '0' : answer;
}

/**
 * 시간초과
function solution(numbers) {
  const numberLength = numbers.join('').length;
  const set = new Set();
  const recursive = (comb, other) => {
    if(comb !== '' && comb.length === numberLength) set.add(comb);
    for(let i = 0; i < other.length; i++) {
      recursive(comb + other[i], other.filter((v) => v !== other[i]));
    }
  }
  recursive('', numbers);
  return String(Math.max(...set));
}

 * 인덱스를 0 ~ n 까지 넘어갈 수가 없네..
function solution(numbers) {
  let answer = '';
  let strArr = numbers.map(String);

  //a, b 중 0번째가 가장 큰 숫자를 내림차순으로 정렬
  for(let i = 0; i < strArr.length - 1; i++) {
    for(let j = 0; j < strArr.length - 1 - i; j++) {
      if(strArr[j].charAt(0) < strArr[j + 1].charAt(0)) {
        [strArr[j], strArr[j + 1]] = [strArr[j + 1], strArr[j]];
      }
    }
  }
  return strArr;
  //a, b 중 1...번째가 가장 큰 숫자를 내림차순으로 정렬
}
 */

// const numbers = [6, 10, 2];
// const numbers = [3, 30, 34, 5, 9];
const numbers = [0,0,0,0]; // 테스트케이스11번
console.log(solution(numbers));
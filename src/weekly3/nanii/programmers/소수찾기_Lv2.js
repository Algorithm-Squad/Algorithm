/**
 * 소수찾기 Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 * 문제해석 : 1 <= n <= 7
 * 소수 : 1보다 큰 자연수 중 자기자신만을 약수로 가지는 경우의 수 리턴 (isPrime :(2 ~ n**(1/2)+1) n % i === 0 ? false)
 * 깊이우선탐색 -> 스택/재귀로 DFS구현
 * (1) 모든 숫자조합을 재귀함수로 생성 (매개변수 어떤걸 넣어줘야 할지 잘 생각해야됨😭), Set으로 중복 제거
 * (2) 소수의 갯수만 count - 에라토스테네스의 체 (그 숫자의 루트 씌운 값까지만 확인하면 된다)
 *
 * 해결과정
 * (1) 주어진 각각의 숫자를 이용해 중복되지 않는 숫자 조합을 생성합니다. ex(1, 7, 17, 71)
 *  (1-1) 중복을 제거하기 위해 Set객체를 이용합니다.
 *  (1-2) 재귀함수를 사용해 숫자 조합을 만듭니다.
 *    (1-2-1) 매개변수로 '', numbers String 전달하면서 combination 함수를 호출합니다.
 *    (1-2-2) 첫 매개변수 ''일 경우를 제외하고,
 *    (1-2-3) 두번째 매개변수 문자열에서 i번째 string을 other.charAt(i)메소드를 이용하여 i번째 문자열만 붙여 첫번째 매개변수로 전달하여 Set객체에 넣습니다.
 *    (1-2-4) 두번째 매개변수는 첫번째 매개변수에 넣은 i번째 string 값을 제외한 값을 매개변수로 전달하면서 조합을 생성합니다.
 *
 * (2) 숫자 조합에서 소수의 갯수를 찾기 위해 소수 판별 함수를 생성합니다.
 *  (2-1) 1보다 큰 자연수 중 자기 자신만을 약수를 하는 수인 소수를 찾기 위해 (0, 1을 제외시키고)
 *  (2-2) 소수가 아닐 경우 그 수의 제곱근 이전에 약수가 존재함을 이용해 for문의 조건을 i = 2 ~ Math.sqrt(n) + 1 로 두고
 *  (2-3) 어떠한 i로 나눠지는 경우 false, 나눠지는 i가 존재하지 않을 경우 소수 true를 반환합니다.
 * (3) 중복이 없는 숫자 조합 객체를 spread syntax를 이용해 순회하면서 소수를 판별하고, 소수일 경우 count ++ 증가시켜 소수의 갯수를 반환합니다.
 *
 * 시간복잡도 :
 * 공간복잡도 :
 *
 * @param {*} numbers
 * @returns
 */
const solution = (numbers) => {
  let numberSet = new Set();

  const combination = (comb, others) => {
    //함수 호출에 사용한 ''를 제외한 comb(첫번째 인자)를 numberSet객체에 넣습니다.(중복 자동 제거)
    if(comb !== '') {
      numberSet.add(Number(comb));
    }
    for(let i = 0; i < others.length; i ++) {
      //재귀함수를 이용해 매개변수를 계속해서 변경하면서 숫자 조합을 찾습니다.
      //첫번째 인자 : numberSet 객체 에 넣은 첫번째 인자에 + 두번째 인자에서 가져온 i번째 문자열 하나를 붙인 값
      //두번째 인자 : i번째 문자열 하나만 제외한 문자열 (others.substring(0,i) : 0 ~ i이전의 문자열, others.substring(i+1) : i 다음 인덱스부터의 문자열)
      combination(comb + others.charAt(i), others.substring(0, i) + others.substring(i + 1));
    }
  }

  //combination 재귀함수 호출 ('', numbersString)를 전달합니다.
  combination('', numbers);

  //소수 판별 함수입니다.
  const isPrime = (n) => {
    //1보다 큰 자연수인 n의 조건을 위해 0, 1일 때 false를 반환합니다.
    if(n === 0 || n === 1 ) return false;

    //2부터 n의 제곱근 까지 순회하면서 나누어지는 경우 false를 반환하고, 나누어지는 값이 없는 경우 true를 반환합니다.
    //ex. 143 의 루트 = 11.958260743101398 까지만 순회하면 나누어지는 값을 찾을 수 있습니다.(1, 11, 13, 143)
    for(let i = 2; i < Math.sqrt(n) + 1; i ++) {
      if(n % i === 0) return false;
    }
    return true;
  }

  //소수 갯수를 찾기 위한 변수 count
  let count = 0;
  //numbers 조합 객체를 spread syntax를 이용해 순회하면서 소수판별함수를 이용해 true일 경우 소수 갯수를 증가시킵니다.
  [...numberSet].forEach((n) => {
    if(isPrime(n)) count ++;
  });
  return count;
}

// const numbers = "17" //3
// const numbers = "011"; //2
const numbers = "143"; //6
// console.log(Math.sqrt(143));
console.log(solution(numbers));
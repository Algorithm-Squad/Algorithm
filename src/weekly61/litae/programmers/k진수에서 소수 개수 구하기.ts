function solution(n: number, k: number): number {
  let answer = 0;
  // 주어진 수 n을 k진수로 변경
  const kNumber = n.toString(k);
  // K진수로 변경된 수를 '0'을 기준으로 배열로 나누고 요소를 숫자로 변환
  const numberArray = kNumber.split("0").map((element) => Number(element));

  // 배열을 돌면서 요소가 소수인 경우 answer를 +1;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] !== 0 && numberArray[i] !== 1) {
      if (isPrimeNumber(numberArray[i])) answer++;
    }
  }

  return answer;
}

// 소수인지 여부를 확인하는 함수
function isPrimeNumber(number: number): boolean {
  // 0, 1은 소수가 아니기 때문에 false를 반환
  if (number <= 1) return false;
  // 2, 3은 소수이기 때문에 true를 반환
  if (number <= 3) return true;
  // 2의 배수거나 3의 배수인 경우 false를 반환
  if (number % 2 === 0 || number % 3 === 0) return false;

  // 5이상인 홀수인 경우 제곱근 number만큼 반복문을 돌면서 소수인지 여부를 확인
  for (let i = 5; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
}

// 실패 사례(시간 초과
// function isPrimeNumber(number) {
//     const answer = [];
//     for(let i = 1; i < number + 1; i++) {
//         if(number % i === 0) answer.push(i);
//     }
//     if(answer.length === 2 && answer.includes(1) && answer.includes(number)) return true;

//     return false;
// })

// 1부터 number까지 모든 숫자를 확인하다보니 비효율적
// 제곱근 number를 활용하면 효율을 높일 수 있음
// ex) 36인 경우 약수는 1, 2, 3, 4, 6, 9, 18, 36
// 약수는 좌우 대칭인 구조를 가지고 있음(1, 36) / (36, 1), 따라서 number의 제곱근(가운데 수)까지만 확인하면 모든 경우의 수를 확인할 수 있음
// 위의 규칙을 적용하여 refactoring

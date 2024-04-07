function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let num = n.toString(k);
  let numArr = num.split("0");

  numArr.forEach((number) => {
    if (isPrimeNumber(Number(number))) {
      answer += 1;
    }
  });

  return answer;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2

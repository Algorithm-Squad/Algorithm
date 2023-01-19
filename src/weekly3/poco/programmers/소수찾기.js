// https://school.programmers.co.kr/learn/courses/30/lessons/42839

const permute = function (arr, target) {
  // 순서 있는 조합을 만드는 함수
  const result = [];
  if (target === 1) return arr.map((v) => [v]);

  arr.forEach((v, i, arr) => {
    const restArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permutation = permute(restArr, target - 1);
    const combined = permutation.map((el) => [v, ...el]);
    result.push(...combined);
  });

  return result;
};

const isPrime = function (num) {
  // 소수를 판별하는 함수 O(√N)
  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = function (numbers) {
  const permutationOfNumbers = [];
  const arr = numbers.split('');
  let times = arr.length;

  while (times > 0) {
    permutationOfNumbers.push(...permute(arr, times));
    times--;
  }
  const arrOfNum = permutationOfNumbers.map((v) => Number(v.join('')));
  const result = arrOfNum.filter((v) => isPrime(v));

  return [...new Set(result)].length;
};

// 문제설명
// 문자열 numbers의 각 자리의 숫자들을 조합해서 만들 수 있는 소수의 갯수를 구하는 문제,
// 2. 조합된 수가 소수인지 판별해야한다.

// 문제해결
// 1. 문자열 numbers의 각 자리의 숫자들을 순서 있게 조합해서 만들 수 있는 모든 숫자를 구한다(permutation)
// 1-1. 순서 있는 조합(순열)을 구하기 위해 배열과 조합할 숫자의 갯수를 매개변수로 하는 permute 함수를 작성한다.
// 1-2. 문제에서 주어진 numbers는 문자열이기 때문에, split 매서드를 통해 각 숫자를 요소로 갖는 배열을 만들고,
//      1개 ~ 해당 배열의 길이까지의 순서있는 조합을 찾는다.
// 2. 조합된 수가 소수인지 판별하고 소수들을 배열에 담고, 배열의 길이를 최종 출력한다
// 2-1. 소수 판별의 경우, 2부터 n의 제곱근까지 수를 나눠서 나머지가 0인 경우가 발생하면 합성수에 해당한다.

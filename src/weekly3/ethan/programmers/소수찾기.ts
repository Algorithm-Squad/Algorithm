/*
문제 설명
- 한자리 숫자가 적힌 문자열이 입력으로 들어옵니다.
- 흩어진 종이 조각을 붙여 소수를 몇개 만들 수 있는지 알아내는 문제입니다.
- 제한사항 : 문자열 입력 길이는 1~7, number는 0부터 9까지의 숫자로 제공된다.
*/

function findPrimeNumber(numbers: string): number {
  const set = new Set();
  const nums = numbers.split('');

  dfs(set, nums);

  return set.size;
}

function dfs(set: Set<unknown>, arr: Array<unknown>, str = '') {
  // 1개 이상이면 계속 dfs 수행
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      let newStr = str + arr[i]; // '' + '17'
      let copyArr = [...arr];
      copyArr.splice(i, 1); // '1' -> '7'

      if (isPrime(parseInt(newStr))) {
        set.add(parseInt(newStr));
      }

      dfs(set, copyArr, newStr);
    }
  }
}

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(findPrimeNumber('17')); // 3

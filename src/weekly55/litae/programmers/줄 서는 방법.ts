export function solution(n: number, k: number) {
  const answer: number[] = [];

  // 1부터 n까지 담긴 배열 만들기
  const arr = new Array(n).fill(1);
  for (let i = 1; i < n; i++) arr[i] = arr[i - 1] + 1;

  // k의 숫자를 배열의 index로 변환하기 위해 -1
  let nth = k - 1;

  while (arr.length) {
    // k가 1일 경우에는 기본 배열은 정답 배열에 넣고 반환
    if (nth === 0) {
      answer.push(...arr);
      break;
    }

    // factorial(arr.length - 1)을 주기로 배열의 앞자리 수가 바뀌는 패턴을 확인
    const fact = factorial(arr.length - 1);
    // nth에서 패턴 수를 나눠 앞자리를 결정하고 정답 배열에 넣어준다
    const index = (nth / fact) >> 0;
    // 나눈 값의 나머지 다시 nth로 저장하여 활용
    nth = nth % fact;

    // 정답 배열에 넣은 후에는 splice를 통해 정답 배열에 넣은 값을 arr 배열에서 제거
    // 모든 숫자가 정답 배열에 들어가 arr 배열이 빈 배열이 될때까지 반복
    answer.push(arr[index]);
    arr.splice(index, 1);
  }

  return answer;
}

const factorial = (n) => {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
};

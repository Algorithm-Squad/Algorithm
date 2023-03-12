// https://school.programmers.co.kr/learn/courses/30/lessons/42883

const solution = (number, k) => {
  const answer = [];

  for (let i = 0; i < number.length; i++) {
    const curr = number[i];

    while (answer.length > 0 && answer[answer.length - 1] < curr && k > 0) {
      k--;
      answer.pop();
    }
    answer.push(curr);
  }

  answer.splice(number.length - k, k);
  // 위 코드가 없는 경우 테스트 12를 통과 못하는 상황 발생
  return answer.join('');
};

// console.log(solution('2194', 3));
// 결과 => 94 출력되는 부분 이해가 되지 않음

// 그리디는 그때 상황에서 최적의 정답을 찾자 -> 과연 그리디를 쓰는 상황이 옳은 지에 대해서 판단이 어렵다
// 문제 설명 및 해결
// 전체 숫자(문자열) number와 제거할 숫자의 갯수 k가 매개변수로 주어진다.
// 이때, number에서 k개 만큼의 숫자를 제거했을 때, 가장 큰 숫자를 문자열 형태로 출력하는 문제
// 문자열 number를 순회하면서, answer 배열이 비어있을 경우, 해당 문자열을 push하고
// answer 배열이 비어있지 않은 경우, 현재 문자열과 비교하여, 현재 문자열보다 큰 수가 나올 때까지
// 최대 k번 반복하면서, answer 배열을 pop을 하고, 현재 문자열을 push 한다.
// 위의 과정을 마친 뒤, k가 0보다 큰 경우, answer 배열을 뒤에서부터 k만큼 제거

/*
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

const solution = (number, k) => {
  let answer = 0;
  let count = number.length - k;
  let numArray = permute(number.split(''), count);

  numArray.forEach((element) => {
    Number(element.join('')) > answer ? (answer = Number(element.join(''))) : null;
  });
  return answer.toString();
};

원하는 갯수만큼의 숫자 조합을 만들고 비교하는 방법으로 문제 해결를 시도하였으나, 테스트 코드 미통과,
전체 제출에서 런타임 에러 등 발생
*/

// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const table = [6, 6, 5, 4, 3, 2, 1];

  const correctCount = lottos.filter((lotto) => win_nums.includes(lotto)).length;

  const zeroCount = lottos.filter((lotto) => lotto === 0).length;

  const maxCount = correctCount + zeroCount;
  return [table[maxCount], table[correctCount]];
}

// 매개변수
// lottos : 민우가 구매한 로또 번호
// win_nums : 당첨 번호

// 출력
// 당첨 가능한 최고 순위, 최저 순위를 담은 배열

// 문제 설명 및 해결
// 민우가 구매한 로또 번호 중에 알아볼수 없는 번호를 0으로 표시했을 때,
// 당첨번호와 비교해서 민우가 당첨될 수 있는 최고, 최저 순위를 배열에 담아서 return 하는 문제
// 먼저 민우가 구매한 로또 번호와 당첨 번호 중에 일치하는 번호의 갯수를 구한다
// 이는 0으로 표시된 알아볼수 없는 번호가 당첨번호와 모두 다를 때, 최저 순위를 계산할 수 있는 번호 갯수가 된다
// 그리고 민우가 맞춘 번호 갯수와 0의 갯수를 더하는 경우 최고 순위를 계산할 수 있는 번호 갯수가 된다

// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  let answer = '';
  let candidate = '';

  // 전체 나오는 수의 개수는 t * m개, 0부터 시작
  for (let i = 0; i < t * m; i++) {
    // 해당 숫자를 n진법으로 변환 및 알파벳의 경우 대문자 처리
    candidate += i.toString(n).toUpperCase();
  }

  // j가 p - 1부터 시작하는 이유는 0부터 시작하기 때문
  for (let j = p - 1; j < t * m; j += m) {
    answer += candidate[j];
  }

  return answer;
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));

// 매개변수
// n : 진법
// t : 미리 구할 수 숫자의 갯수
// m : 게임에 참가하는 인원
// p : 튜브의 순서

// 출력
// 튜브가 말해야 하는 숫자 t개를 공백 없이 차례대로 나타낸 문자열. 단, 10~15는 각각 대문자 A~F로 출력한다.

// 문제 설명 및 해결
// 숫자를 0부터 시작해서 차례대로 말한다. 첫 번째 사람은 0, 두 번째 사람은 1, … 열 번째 사람은 9를 말한다.
// 10 이상의 숫자부터는 한 자리씩 끊어서 말한다. 즉 열한 번째 사람은 10의 첫 자리인 1, 열두 번째 사람은 둘째 자리인 0을 말한다.
// 이진법에서 십육진법까지 모든 진법으로 게임을 진행해보기로 했다.
// 이때, 튜브가 말해야하는 숫자를 공백없이 차례로 구하는 문제
// m명의 참가자가 참가하고, 튜브의 순서는 p번째이다.
// 튜브가 말해야하는 숫자는 t개이기 때문에, t * m개의 숫자를 구해야한다.
// 0부터 시작하기 때문에, 0부터 t * m - 1까지의 숫자를 구한다.
// 구한 숫자를 n진법으로 변환하고, 대문자로 변환하여 candidate에 저장한다.
// 튜브가 말해야하는 숫자는 p번째부터 시작하기 때문에, p - 1부터 시작하여 m씩 증가하면서 answer에 저장하고 반환한다.

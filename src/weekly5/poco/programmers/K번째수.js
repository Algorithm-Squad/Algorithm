// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];

  commands.forEach((command) => {
    const [begin, end, index] = command;
    answer.push(array.slice(begin - 1, end).sort((a, b) => a - b)[index - 1]);
  });

  return answer;
}

// 문제설명 및 해결
// 배열과, 3개의 command[i, j, k]가 매개변수로 주어졌을 때, 배열의 i번째 숫자부터, j번째 숫자까지 자르고
// 오름차순 정렬을 했을 때, k번째에 있는 숫자를 구하는 문제(출력형태는 배열)
// 주어진 commands를 구조분해 할당을 통해 begin, end, index 변수에 담았고,
// 문제에서의 i,j,k 번째의 인덱스는 배열에서의 인덱스 + 1 상태이기 때문에,
// begin, index는 -1을 계산, end 값은 그대로 사용
// 시간복잡도 forEach문 O(n), 내부에서 sort 매서드 (nlogn) => n^2 이상

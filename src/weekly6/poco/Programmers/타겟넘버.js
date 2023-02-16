// https://school.programmers.co.kr/learn/courses/30/lessons/43165

const solution = (numbers, target) => {
  var answer = 0;
  const DFS = (index, acc) => {
    if (index === numbers.length) {
      acc === target ? answer++ : null;
      return;
    }

    DFS(index + 1, acc + numbers[index]);
    DFS(index + 1, acc - numbers[index]);
  };
  DFS(0, 0);
  return answer;
};

// 문제 설명 및 해결
// 매개변수로 n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고
// 더하거나 빼서 타겟 넘버를 만들수 있는 경우의 수를 출력하는 문제
// 재귀를 활용한 dfs 로직으로 문제 해결
// 재귀 종료 조건은 배열의 index가 numbers 배열의 길이와 같을 경우이며,
// 종료 조건 실행 당시 누계가 target 값과 같은지 비교해서 경우의 수를 더해주는
// 방식으로 문제 해결

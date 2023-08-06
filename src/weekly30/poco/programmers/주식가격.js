// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
  let answer = new Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }
  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = prices.length - temp - 1;
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));

// 매개변수
// prices : 초 단위로 기록된 주식가격이 담긴 배열

// 출력
// 가격이 떨어지지 않은 기간은 몇 초인지를 담은 배열

// 문제 설명 및 해결
// 초 단위로 기록된 주식 가격이 담긴 배열이 주어지고, 가격이 떨어지지 않은 기간은 몇 초인지를 담은 배열을 리턴하는 문제
// 가격이 떨어지지 않은 기간은 가격이 떨어지기 전까지의 기간을 의미한다.
// 따라서, stack을 사용하여 가격이 떨어지지 않은 기간을 구할 수 있다.
// stack에는 prices의 인덱스를 넣어준다.
// prices[i]가 prices[stack[stack.length - 1]]보다 작을 때, stack에서 pop을 해주고
// answer[temp]에 i - temp를 넣어준다.
// 그리고 stack에는 i를 넣어준다.
// while문을 빠져나오면 stack에는 prices의 인덱스가 들어있는데,
// 이는 가격이 떨어지지 않은 기간이므로 prices.length - temp - 1을 answer[temp]에 넣어준다.

// 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은
// 몇 초인지를 return 하도록 solution 함수를 완성하세요.

// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  const sortedPeople = people.sort((a, b) => b - a);

  let answer = 0;
  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    const sum = sortedPeople[left] + sortedPeople[right];
    if (sum > limit) {
      left++;
    } else if (sum <= limit) {
      left++;
      right--;
    }
    answer++;
  }

  if (left === right) answer++;
  return answer;
}

console.log(solution([70, 60, 40, 30], 100));
console.log(solution([70, 80, 50], 100));

// 매개변수
// people : 사람들의 몸무게가 담긴 배열
// limit : 구명보트의 무게 제한

// 출력
// 구명보트의 최소 개수

// 문제 설명 및 해결
// 사람들의 몸무게가 담긴 배열 people이 주어지고
// 구명보트의 무게 제한 limit이 주어졌을 때,
// 구명보트의 최소 개수를 구하는 문제이다.
// 먼저 people 배열을 내림차순으로 정렬하고 left는 0, right는 people.length - 1로 초기화한다.
// while 문을 right가 left보다 클때까지 실행한다.
// 내림차순된 people에서 left index와 right index의 사람의 무게를 더했을 때,
// limit보다 크면 left를 1 증가시키고, limit보다 작거나 같으면 left를 1 증가시키고 right를 1 감소시킨다.
// 그리고 while문을 한번 반복할 때마다 answer를 1 증가시킨다.
// while문이 종료되면 left와 right가 같은 경우에는 answer를 1 증가시킨다.
// left와 right가 같다는 것은 한명이 남았다는 의미이기 때문에 answer를 1 증가시킨다.

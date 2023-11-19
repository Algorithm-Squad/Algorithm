export function solution(people: number[], limit: number): number {
  people.sort((a, b) => b - a);

  let answer = 0;
  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      j--;
    }
    answer++;
    i++;
  }
  return answer;
}

// 풀이 방법
// 1. 내림차순으로 정렬
// 2. 반복문으로 두 명의 몸무게 합이 무게 제한 이하일 경우 한 개의 보트에 태움(j--)
// 3. 한 명이 탔든 두 명이 탔든 보트가 한 대 추가되기 때문에 answer += 1
// 4. 다음 사람을 확인하기 위에 i에 1 추가

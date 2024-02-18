// https://school.programmers.co.kr/learn/courses/30/lessons/12980
const solution = (n) => {
  let answer = 0;
  while (n > 0) {
    n % 2 === 0 ? (n /= 2) : (n--, answer++);
  }

  return answer;
};

// 매개변수
// n : 이동하려는 거리

// 출력
// 거리 n을 이동하기 위해 필요한 건전지 사용량의 최솟값

// 문제 설명 및 해결
// 거리 n을 이동할 때, 배터리 소모량의 최솟값을 구하는 문제이다.
// 점프 한번에 이동할 수 있는 거리는 K칸 혹은 (현재까지 온 거리) x 2칸이다.
// 하지만 k칸을 이동하면 배터리는 k만큼 소모된다.
// 도착점에서 출발점으로 되돌아온다고 생각하면, 2로 나누어 떨어지는 지점은 배터리 소모 없이 이동이 가능하고
// 2로 나누어 떨어지지 않는 경우에는, 1칸을 이동(배터리 소모 +1)을 하고 다시 2로 나누어준다고 생각하면 된다.

console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000)); // 5

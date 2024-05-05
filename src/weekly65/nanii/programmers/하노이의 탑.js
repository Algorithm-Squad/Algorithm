/**
 * 하노이의 탑 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/12946?language=javascript
 * @param {*} n
 * @returns
 * 한번에 하나의 원판을 옮기되 작은 원판 위에 큰원판을 올리면 안됨
 *
 */
function solution(n) {
  let answer = [];

  // 원판총개수 - (a 출발, b 도착, c 경유)

  const hanoi = (n, a, b, c) => {
    if (n === 0) return;

    hanoi(n - 1, a, c, b); // a->c->b
    answer.push([a, b]);
    hanoi(n - 1, c, b, a); // c->b->a
  };

  hanoi(n, 1, 3, 2); // 1->2->3
  return answer;
}

console.log(solution(2)); //[ [1,2], [1,3], [2,3] ]

/**
 * 시작시간: 10:05
 * 종료시간: 10:25
 * 결과: 효율성 테스트 통과x
 */

function solution1(s) {
  let target = s;

  for (let i = 0; i < target.length - 1; i++) {
    const prev = target[i];
    const next = target[i + 1];

    if (prev === next) {
      target = target.slice(0, i) + target.slice(i + 2);
      i === 0 ? (i = -1) : (i -= 2);
    }
  }

  return target ? 0 : 1;
}

/**
 * 시작시간: 10:35
 * 종료시간: 10:50
 */

function solution2(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length ? 1 : 0;
}

console.log(solution2("baabaa")); // 1
console.log(solution2("cdcd")); // 0

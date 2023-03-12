/**
 * 체육복 / Lv1 / 1시간
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * 문제해석 : lost 학생을 순회하면서 +1 또는 -1 한 값이 reserve에 있는지 확인하여 최대 학생 수를 구합니다.
 * filter 메서드와 삼항연산자를 사용하여 중복으로 값을 처리하지 않게 하였습니다.
 *
 * 시간복잡도 : O(nlogn)
 * 공간복잡도 :
 *
 * @param {*} n
 * @param {*} lost
 * @param {*} reserve
 * @returns
 */

function solution(n, lost, reserve) {
  const lost_num = lost.filter(n => !reserve.includes(n)).sort((a, b) => a - b);
  const reserve_num = reserve.filter(n => !lost.includes(n));

  let answer = n;
  let used = [];
  for(let i = 0; i < lost_num.length; i++) {
    const number = lost_num[i];
    const [plus, minus] = [number + 1, number - 1];

    if(reserve_num.includes(minus) || reserve_num.includes(plus)) {
      const value = reserve_num.includes(minus)? minus : plus;

      if(used.includes(value) && !reserve_num.includes(plus)) answer--;
      else used.push(value);
    } else answer --;
  }
  return answer;
}

// const [n,lost,reserve] = [5,[2, 4],[1, 3, 5]] //5
// const [n,lost,reserve] = [5, [2, 4], [3]];//4
const [n,lost,reserve] = [5, [1, 3], [2, 4]] //5
// const [n,lost,reserve] = [3, [3], [1]] //2
// const [n,lost,reserve] = [4, [2,3], [3,4]] //3
console.log(solution(n, lost, reserve));
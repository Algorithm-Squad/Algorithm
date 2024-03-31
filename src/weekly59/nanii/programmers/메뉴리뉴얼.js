/**
 * 메뉴리뉴얼 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/72411
 * @param {*} orders 주문한 메뉴 구성
 * @param {*} course 코스 구성 단품 갯수
 * @returns
 */
function solution(orders, course) {
  const courseMap = new Map();
  orders.forEach((order) => {
    const orderArr = [...order].sort();
    course.forEach((n) => {
      const combinations = combination(orderArr, n);
      combinations.forEach((c) => {
        const courseStr = c.join('');
        courseMap.has(courseStr)
          ? courseMap.set(courseStr, courseMap.get(courseStr) + 1)
          : courseMap.set(courseStr, 1);
      });
    });
  });

  const answer = [];
  const filteredCourse = [...courseMap]
    .filter(([, v]) => v > 1)
    .sort((a, b) => b[1] - a[1]);

  course.forEach((c) => {
    let max = 0;
    filteredCourse.forEach(([k, v]) => {
      if (k.length === c) {
        max = Math.max(max, v);
        // 최대값과 같은 경우에만 추가
        if (v === max) answer.push(k);
      }
    });
  });
  return answer.sort();
}

const combination = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attached = combinations.map((combi) => [v, ...combi]);
    result.push(...attached);
  });
  return result;
};

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
); //["AC", "ACDE", "BCFG", "CDE"]

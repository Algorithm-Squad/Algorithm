/**
 * 멀쩡한 사각형 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/62048?language=javascript
 * @param {*} w 가로
 * @param {*} h 세로
 * @returns 대각선 꼭지점 2개를 잇는 선이 지나가는 사각형의 개수를 제외한 사각형의 개수
 */
function solution(w, h) {
  return w * h - (w + h - getGcd(w, h));
}

const getGcd = (a, b) => {
  const mod = a % b;
  if (mod === 0) return b;
  return getGcd(b, mod);
};

/**
 * 3*1 = 3
 * 3*2 = 4
 * 3*3 = 3
 * 3*4 = 6
 * w * h - (w,h의 최대공약수)
 */

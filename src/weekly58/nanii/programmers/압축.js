/**
 * 압축 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/17684
 * @param {*} msg
 * @returns
 * 가장 긴 문자열 w => index 출력하고 입력에서 w 제거
 * 입력 다음 글자 c => w+c 사전에 등록
 * 다시 가장 긴 문자열 찾기 반복
 *
 */
function solution(msg) {
  const map = new Map();

  let idx = 1;
  for (let i = 65; i <= 90; i++) {
    map.set(String.fromCharCode(i), idx++);
  }

  let answer = [];
  let w = '';
  for (let j = 0; j < msg.length; j++) {
    const c = msg[j];
    w += c;

    // 사전에 문자열이 없으면
    if (!map.has(w)) {
      map.set(w, idx++); // 사전 맨 마지막 인덱스로 새로운 문자열을 추가

      w = w.slice(0, -1); // 추가하기 직전 문자열의 인덱스를 출력

      answer.push(map.get(w));

      w = c; // w에는 현재 문자열로 바꿔준다
    }
  }

  // 마지막 문자열 처리
  if (w.length > 0) answer.push(map.get(w));
  return answer;
}

console.log(solution('KAKAO')); // [11, 1, 27, 15]

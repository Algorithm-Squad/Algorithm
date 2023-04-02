/**
 * 완주하지못한선수 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 *
 * @param {*} participant string array - 마라톤에 참여한 선수이름 배열
 * @param {*} completion string array - 완주한 선수들의 이름이 담긴 배열
 * @returns string - 완주하지 못한 선수 이름
 */
function solution(participant, completion) {
  let map = new Map();
  for(const index in participant) {
    const p = participant[index];
    const c = completion[index];
    map.set(p, (map.get(p) || 0) + 1);
    if(c !== undefined) map.set(c, (map.get(c) || 0) - 1);
  }

  for(const [key, value] of map.entries()) {
    if(value > 0) return key;
  }
}
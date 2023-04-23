/**
 * 비밀지도 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/17681#
 * @param {*} n 지도의 한변 크기
 * @param {*} arr1 지도1
 * @param {*} arr2 지도2
 * @returns 두 지도를 비교하여 주어진 문자열로 변환한 배열
 */
function solution(n, arr1, arr2) {
  const map = { 1: "#", 0: " " };
  const translate = array => array.map(arr => arr.toString(2).padStart(n, 0));
  const array1 = translate(arr1);
  const array2 = translate(arr2);

  const result = [];
  array1.forEach((arr, index) => {
    let string = '';
    [...arr].forEach((str, idx) => {
      str === array2[index][idx] ? string += map[str] : string += map[1];
    });
    result.push(string);
  });
  return result;
}
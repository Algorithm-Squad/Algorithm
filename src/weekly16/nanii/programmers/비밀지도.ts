/**
 * 비밀지도 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/17681#
 * @param {*} n 지도의 한변 크기
 * @param {*} arr1 지도1
 * @param {*} arr2 지도2
 * @returns 두 지도를 비교하여 주어진 문자열로 변환한 배열
 */
function solution(n:number, arr1:number[], arr2:number[]) :string[] {
  const map : { 1: string, 0: string } = { 1 : "#", 0: " " };
  const translate = (arr:number[]) :string[] => arr.map(arr => padStart(n, '0', Number(arr).toString(2)));
  //TS 는 padStart method 지원이 되지 않음
  const padStart = (targetLength: number, padString: string, str: string): string => {
    return str.length >= targetLength ? str : new Array(targetLength - str.length + 1).join(padString) + str;
  };
  const array1 = translate(arr1);
  const array2 = translate(arr2);

  const result = [];
  array1.forEach((arr, index) => {
    let string :string = '';
    arr.split('').forEach((str, idx) => {
      str === array2[index][idx] ? string += map[str] : string += map[1];
    });
    result.push(string);
  });
  return result;
}
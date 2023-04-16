/**
 * 문자열정렬하기(1)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120850
 * @param my_string string
 * @returns number[]
 */
function solution(my_string :string) : number[] {
  let answer :number[] = [];
  for(const n of my_string) {
    const num :number = Number(n);
    if(isNaN(num)) continue;
    answer.push(num);
  }
  return answer.sort();
}
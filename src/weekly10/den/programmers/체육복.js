/**
 * 문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * 
 * 시간복잡도: O(N)
 * 
 * 문제설명
 * @param n: 전체학생의 수
 * @param lost: 도난당한 학생의 번호가 담긴 배열
 * @param reverse: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
 * 
 */

function solution(n, lost, reserve) {
  let hasUniform = new Array(n).fill(1);

  lost.forEach(lostStudent => hasUniform[lostStudent - 1]--);
  reserve.forEach(spareClothesStudent => hasUniform[spareClothesStudent - 1]++);

  hasUniform.forEach((student, index) => {
    if(student === 0){
      if(hasUniform[index - 1] === 2){
        hasUniform[index]++;
        hasUniform[index - 1]--;
      } else if(hasUniform[index + 1] === 2){
        hasUniform[index]++;
        hasUniform[index + 1]--;
      }
    }
  })

  return hasUniform.filter(value => value >= 1).length;
}

console.log(solution(5, [2,4], [1,3,5])); // 5
console.log(solution(5, [2,4], [3]));     // 4
console.log(solution(3, [3], [1]));       // 2 


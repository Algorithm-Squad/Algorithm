/**
 * 문제 출처: https://school.programmers.co.kr/learn/courses/30/lessons/42883
 * 
 * 시간복잡도: O(N^2)
 * 
 * @param number 문자열 형식의 수
 * @param k 제거할 수의 갯수
 * 
 */

function solution(numbers, k) {
  let number = numbers.split("").map(Number);
  let answer = [];
  
  number.forEach((n) => {
    let current = n; 
    while (true) {
      if(k <= 0) break;
      // arr의 마지막 숫자가 현재 숫자보다 작을경우 arr마지막 숫자 제거
      if(answer[answer.length - 1] < current){
        answer.pop();
        k--;
      } else break;
    }
    answer.push(current);
  }) 

  // k개 만큼 모두 제거하지 못한 경우도 있다.
  answer.splice(answer.length - k, k);
  return answer.join('');
}

console.log(solution("1924", 2));        // 94
console.log(solution("1231234", 3));     // 3234
console.log(solution("4177252841", 4));  // 775841
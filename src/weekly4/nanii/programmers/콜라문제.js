/**
 * 콜라문제 Lv.1 (10분)
 * https://school.programmers.co.kr/learn/courses/30/lessons/132267
 * 문제해석
 * (1) n/a = 몫 * b = 얻은 콜라의 갯수,
 * (2) n%a = 나머지
 * (3) 얻은 콜라에 나머지를 더하여 / a 를 계속 하면서 얻은 콜라의 갯수를 찾는다
 * (4) 종료조건 : 더이상 a 로 나누어지지 않을 때 종료
 * 문제를 보고 while문이 생각나서 먼저 해결해보고, 재귀주제에 맞추어 재풀이했습니다
 *
 * 시간복잡도 : O(n)
 * 공간복잡도 :
 *
 * @param {*} a
 * @param {*} b
 * @param {*} n
 * @returns
 */
function solution(a, b, n) {
 var totalCola = 0;

 while(parseInt(n / a)) {
   let get = parseInt(n / a) * b;
   let remainder = n % a;
   n = get + remainder;
   totalCola += get;
 }
 return totalCola;
}

// function solution(a,b,n) {
//   function getCola(a, b, n, total) {
//     let get = parseInt(n / a) * b;
//     let remainder = n % a;
//     total += get;
//     if(parseInt(n / a) > 0) return getCola(a, b, get + remainder, total);
//     else return total;
//   }
//   let answer = getCola(a, b, n, 0);
//   return answer;
// }
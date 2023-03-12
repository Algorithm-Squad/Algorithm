/**
 * 큰수만들기 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/42883
 * 문제해석 : 주어진 인덱스를 넘지않는 선에서 가장 큰 수를 뽑고,
 * 큰 수의 다음 인덱스에서 가장 큰 수를 뽑으면서 숫자 조합을 만듭니다
 *
 * 시간복잡도 :
 * 공간복잡도 :
 */

function solution(number, k) {
  let stack = [];
  let count = k;

  // const [number, k] = ["4177252841",4] => "775841"
  for(let i = 0; i < number.length; i ++) {
    const n = number[i];
    while(stack.at(-1) < n && count > 0) {
      stack.pop();
      count --;
    }
    if(stack.length < number.length - k) stack.push(n);
  }
  return stack.join('');
}


//런타임에러 (완전탐색) -> 그리디의 필요성..
// function solution(number, k) {
//   const length = number.length - k;
//   let set = new Set();
//   const combination = (combs, others) => {
//     if(combs !== '' && combs.length === length) set.add(Number(combs));

//     for(let i = 0; i < others.length; i ++) {
//       combination(combs + others.charAt(i), others.substring(i + 1));
//     }
//   }

//   combination('', number);
//   return String(Math.max(...set));
// }


// const [number, k] = ["1924",2] //"94"
// const [number, k] = ["1231234",3] //"3234"
// const [number, k] = ["4177252841",4] //"775841"
// const [number, k] = ["654321",1] //"65432"
// const [number, k] = ["654321",5] //"6"

// solution("1111111119",9);
console.log(solution(number, k));
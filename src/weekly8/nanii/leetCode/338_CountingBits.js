/**
 * 338. Counting Bits / Easy
 * https://leetcode.com/problems/counting-bits/
 * 문제해석 : binary 계산을 한 뒤, 배열로 나타내기
 *
 * 시간복잡도 : O(n^...)
 * 공간복잡도 : O(n)
 *
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {

  const nTobinary = n => {
    let sum = 0;
    let quotient = n
    while(quotient) {
      let remainder = quotient % 2;
      quotient = Math.floor(quotient / 2);
      if(remainder === 1) sum += 1;
    }
    return sum;
  }

  let answer = [];
  for(let i = 0; i <= n; i ++) {
    answer.push(nTobinary(i));
  }
  return answer;
};

// const n = 2; //[0,1,1]
const n = 5; //[0,1,1,2,1,2]
console.log(countBits(n));


/**
 var countBits = function(n) {
  const arr = [];
  let result, lastBit, aux;
  for(var i = 0; i <= n; i++) {
    result = 0;
    aux = i;
    while(aux != 0) {
      //비트연산자 사용방법.. what is >>
        lastBit = aux & 1;
        if(!!lastBit) result++;
        aux = aux >> 1;
    }
    arr.push(result);
  }
  return arr;
 };

 */
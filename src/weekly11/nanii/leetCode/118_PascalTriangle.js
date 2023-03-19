/**
 * 118. 118. Pascal's Triangle / Easy
 * https://leetcode.com/problems/pascals-triangle/
 * 문제 해석 : 앞줄의 배열에서 - 1, + 0 위치의 인덱스의 값을 더해가며 2차원 배열을 만드는 문제입니다.
 * 이때 인덱스가 0이거나 맨마지막 요소인 경우는 1을 넣고, 아닐경우 [i-1][j-1] + [i-1][j]한 값을 할당합니다.
 *
 * 시간복잡도 :
 * 공간복잡도 :
 *
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
  let array = [[1]];
  for(let i = 1; i < numRows; i ++) {
    let row = [];
    for(let j = 0; j <= i; j++) {
      if(j === 0 || j === i) row.push(1);
      else {
        row.push(array[i - 1][j - 1] + array[i - 1][j]);
      }
    }
    array.push(row);
  }
  return array;
};

const numRows = 5;  //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// const numRows = 1;  //[[1]]
console.log(generate(numRows));
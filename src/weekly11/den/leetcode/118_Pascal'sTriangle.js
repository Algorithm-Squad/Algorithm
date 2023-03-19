/**
 * 문제출처: https://leetcode.com/problems/pascals-triangle/description/
 * 
 * 시간복잡도: O(N^2)
 * 
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const table = [];
  for (let i = 0; i < numRows; i++) {
    table[i] = [];
    table[i][0] = 1;
    for (let j = 1; j < i; j++) {
      table[i][j] = table[i-1][j-1] + table[i-1][j]
    }
    table[i][i] = 1;
  }
  return table;
}

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
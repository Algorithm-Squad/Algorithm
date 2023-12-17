/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function(n) {
  const result = [];
  const dfs = (num) => {
    if (num > n) {
      return;
    }
    result.push(num);
    for (let i = 0; i < 10; i++) {
      dfs(num * 10 + i);
    }
  };

  for (let i = 1; i < 10; i++) {
    dfs(i);
  }

  return result;
}

console.log(lexicalOrder(13)); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(lexicalOrder(2)); // [1,2]
/**
 * @param {string} s
 * @return {number}
 */

const minAddToMakeValid = function(s) {
  const stack = []

  for(let i = 0; i < s.length; i++){
    if(s[i] === '(') stack.push(s[i]);

    if (s[i] === ')'){
      if (stack.at(-1) === '('){
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  return stack.length;
};

console.log(minAddToMakeValid("())")); // 1
console.log(minAddToMakeValid("(((")); // 3
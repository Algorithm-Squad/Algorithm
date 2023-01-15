/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * 문제 해석 : 괄호문제는 뭐다??
 *
 * 시간복잡도 : [Runtime 60 ms] [Beats 96.49%]
 * 공간복잡도 : [Memory 42.6 MB] [Beats 54.18%]
 *
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let type = [];

  for(let i of s) {
    switch(i) {
      case '(':
        type.push('(');
        break;
      case ')':
        if(type[type.length - 1] === '(' && type.length !== 0) type.pop();
        else return false;
        break;
      case '{':
        type.push('{');
        break;
      case '}':
        if(type[type.length - 1] === '{' && type.length !== 0) type.pop();
        else return false;
        break;
      case '[':
        type.push('[');
        break;
      case ']':
        if(type[type.length - 1] === '[' && type.length !== 0) type.pop();
        else return false;
        break;
      default:
        return false;
      }
  }
  return type.length === 0 ? true : false;
};

s = "]"
console.log(isValid(s));

/**
 * var isValid = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
      let character = s.charAt(i); //arr[i]
      switch(character){
        case '(' :
          stack.push(')');
          break;
        case '{':
          stack.push('}');
          break;
        case '[':
          stack.push(']');
          break;
        default:
          if(character !== stack.pop())
          {return false;}
       }
   }
   return stack.length == 0;
};
 */
/**
 * 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses
 * @param n 괄호 짝의 개수
 * @returns n개의 괄호 짝을 만들 수 있는 모든 조합
 */
function generateParenthesis(n: number): string[] {
  const result = [];

  const brackets = {
      open:"(",
      close: ")",

  }

  const combination = (open:number, close:number, current:string) => {
    if(!open && !close) {
      result.push(current);
      return;
    }
    if(open < close) {
      combination(open, close - 1, current+brackets['close']);
    }
    if(open > 0) {
      combination(open - 1, close, current+brackets['open']);
    }
  }
  combination(n , n, '');
  return result;
};
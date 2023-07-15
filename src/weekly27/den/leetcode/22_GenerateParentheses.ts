/**
 * 문제출처: https://leetcode.com/problems/generate-parentheses/
 * 시작시간: 10:55
 * 종료시간:
 * 
 * 1. 문제 설명
 * - n개의 괄호로 만들 수 있는 모든 조합을 반환하라.
 * 
 * 2. 풀이 방법
 * - 재귀를 통해 모든 경우의 수를 구한다.
 * - 왼쪽 괄호가 n개, 오른쪽 괄호가 n개가 될 때까지 재귀를 돌린다.
 * - left === 0 && right === 0 일 때, 결과에 추가한다.
 */

const generateParenthesis = function(n: number): string[] {
  if(n === 1) return ["()"];
  const result:string[] = [];
  
  const generate = (left: number, right: number, str: string) => {
    if(left === 0 && right === 0) {
        result.push(str);
        return;
    }
    if(left > 0) generate(left - 1, right, str + '(');
    if(right > left) generate(left, right - 1, str + ')');
  }
  generate(n, n, '');
  return result;
};

console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)) // ["()"]

// 위 코드 풀이 방법
// 1. 재귀를 통해 모든 경우의 수를 구한다.
// 2. 왼쪽 괄호가 n개, 오른쪽 괄호가 n개가 될 때까지 재귀를 돌린다.
// 3. left > 0 이면, 왼쪽 괄호를 추가한다.
// 4. right > left 이면, 오른쪽 괄호를 추가한다.(오른쪽 괄호가 왼쪽 괄호보다 많을 수 없다.)
// 5. left === 0 && right === 0 이면, 결과에 추가한다.
// 6. 3 ~ 5 과정을 반복한다.
// 7. 결과를 반환한다.

// n = 3일 때,
// 왼 1 -> 왼 1 -> 왼 1 ⟫⟫⟫⟫⟫ 오 1 -> 오 1 -> 오 1
// 왼 1 -> 왼 1 ⟫⟫⟫⟫⟫ 오 1 ⟫⟫⟫⟫⟫ 왼 1 -> 오 1 -> 오 1
// 왼 1 -> 왼 1 ⟫⟫⟫⟫⟫ 오 1 -> 오 1 ⟫⟫⟫⟫⟫ 왼 1 -> 오 1
// 왼 1 ⟫⟫⟫⟫⟫ 오 1 ⟫⟫⟫⟫⟫ 왼 1 -> 왼 1 ⟫⟫⟫⟫⟫ 오 1 -> 오 1
// 왼 1 ⟫⟫⟫⟫⟫ 오 1 ⟫⟫⟫⟫⟫ 왼 1 ⟫⟫⟫⟫⟫ 오 1 ⟫⟫⟫⟫⟫ 왼 1 ⟫⟫⟫⟫⟫ 오 1


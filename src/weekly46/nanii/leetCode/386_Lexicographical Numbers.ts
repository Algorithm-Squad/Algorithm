/**
 * 386. Lexicographical Numbers / Medium
 * https://leetcode.com/problems/lexicographical-numbers
 * @param n
 * O(n)시간복잡도, O(1)공간복잡도로 풀어야됨
 */
function lexicalOrder(n: number): number[] {
  const result = [];

  const dfs = (num: number) => {
    if (num > n) return;
    result.push(num);
    // 0~9까지의 숫자를 각각 뒤에 붙여서 재귀호출
    for (let i = 0; i < 10; i++) {
      dfs(num * 10 + i);
    }
  };

  for (let i = 1; i < 10; i++) {
    dfs(i);
  }

  return result;
}

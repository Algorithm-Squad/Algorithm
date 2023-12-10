/**
 * 131. Palindrome Partitioning / Medium
 * https://leetcode.com/problems/palindrome-partitioning/
 * @param s
 * @returns palindrome이 되는 요소를 분할
 */
function partition(s: string): string[][] {
  const result = [];

  const dfs = (s: string, path: string[]) => {
    const length = s.length;
    if (length === 0) {
      result.push(path);
      return;
    }

    for (let i = 0; i < length; i++) {
      const str = s.slice(0, i + 1);
      if (isPalindrome(str)) {
        dfs(s.slice(i + 1), [...path, str]);
      }
    }
  };

  dfs(s, []);
  return result;
}

const isPalindrome = (s: string): boolean => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left++] !== s[right--]) return false;
  }
  return true;
};

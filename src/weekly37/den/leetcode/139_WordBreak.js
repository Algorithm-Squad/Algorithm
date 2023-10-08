const wordBreak = function (s, wordDict, memo = {}) {
  if (memo[s] !== undefined) return memo[s];
  if (s.length === 0) return true;

  for (const word of wordDict) {
    if (s.indexOf(word) === 0) {
      const output = wordBreak(s.slice(word.length), wordDict, memo);
      if (output) {
        memo[s] = true;
        return true;
      }
    }
  }

  memo[s] = false;
  return false;
};

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false

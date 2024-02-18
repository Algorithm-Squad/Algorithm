export function solution(n: number, words: string[]): number[] {
  let index: number = 0;
  let visited: Set<string> = new Set();

  for (let i = 1; i < words.length; i++) {
    if (
      isWrongWord(words[i - 1], words[i]) ||
      isDuplicateWord(visited, words[i])
    ) {
      index = i;
      break;
    }
    visited.add(words[i - 1]);
  }

  return index === 0 ? [0, 0] : [(index % n) + 1, Math.floor(index / n) + 1];
}

function isWrongWord(preWord: string, curWord: string) {
  return preWord[preWord.length - 1] !== curWord[0];
}

function isDuplicateWord(visited: Set<string>, word: string) {
  return visited.has(word);
}

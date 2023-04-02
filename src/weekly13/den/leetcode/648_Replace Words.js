/**
 * 문제출처: https://leetcode.com/problems/replace-words/
 * 
 * 시간복잡도:
 * 
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

 var replaceWords = function(dictionary, sentence) {
  const words = new Map();

  sentence.split(" ").forEach(word => words.set(word.split("")))

  dictionary.forEach(rootWord => {
    const length = rootWord.length;

    words.forEach((afterChange, beforeChange) => {
      if(beforeChange.length >= length){
        const targetWord = beforeChange.slice(0, length).join("");
        if(rootWord === targetWord && afterChange === undefined) words.set(beforeChange, targetWord)
        if(rootWord === targetWord && afterChange != undefined && rootWord.length < afterChange.length){
          words.set(beforeChange, targetWord)
        }
      }
    })
  })

  words.forEach((afterChange, beforeChange) => {
    if(afterChange === undefined) words.set(beforeChange, beforeChange.join(""));
  })

  return [...words].map(set => set[1]).join(" ");
};

console.log(replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery")); // "the cat was rat by the bat"
console.log(replaceWords(["a","b","c"], "aadsfasf absbs bbab cadsfafs")); // "a a b c"
console.log(replaceWords(["a", "aa", "aaa", "aaaa"], "bbb baba ababa"));
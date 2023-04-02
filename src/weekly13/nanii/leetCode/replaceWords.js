/**
 * 648. Replace Words
 * https://leetcode.com/problems/replace-words/
 *
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  const dic = dictionary.sort();
  return sentence.split(' ').map(string => {
    for(let i = 0; i < dic.length; i++) {
      const root = dic[i];
      if(string.startsWith(root)) return root;
      else continue;
    }
    return string
  }).join(' ');
};

const [dictionary, sentence] = [["cat","bat","rat"], "the cattle was rattled by the battery"];
// const [dictionary, sentence] = [["a","b","c"], "aadsfasf absbs bbab cadsfafs"];
console.log(replaceWords(dictionary, sentence));
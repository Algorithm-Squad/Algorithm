/**
 * 648. Replace Words
 * https://leetcode.com/problems/replace-words/
 *
 * @param {string[]} dictionary ["cat", "batt", "bat","rat"]
 * @param {string} sentence the cattle was rattled by the battery
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  const dic = dictionary.sort();
  return sentence.split(' ').map(string => {
    for(let i = 0; i < dic.length; i++) {
      const root = dic[i];
      if(string.startsWith(root)) return root;
    }
    return string;
  }).join(' ');
};
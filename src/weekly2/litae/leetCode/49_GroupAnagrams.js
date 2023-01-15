var groupAnagrams = function(strs) {
    let array = [];
    let word = {};

    for(let i = 0; i < strs.length; i++) {
        const sortWord = strs[i].split('').sort().join('')

        if(word[sortWord] !== undefined) {
            array[word[sortWord]].push(strs[i]);
        } else {
            array.push([strs[i]])
            word[sortWord] = array.length - 1;
        }
    }

    return array;
};
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let arrayOfSentence = sentence.split(' ');

    dictionary.sort().forEach(element => {
        for (let i = 0; i < arrayOfSentence.length; i++) {
            if (arrayOfSentence[i].startsWith(element)) arrayOfSentence[i] = element;
        }
    });

    return arrayOfSentence.join(' ');
};


// 풀이 방법
// 1. 주어진 문장을 split을 사용하여 띄어쓰기를 기준으로 배열로 변환
// 2. dictionary를 sort로 정렬한 후 arrayOfSentence의 요소가 prefix로 시작되면 해당 요소를 리턴
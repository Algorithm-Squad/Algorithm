function solution(citations) {
    const sortCitations = citations.sort((a, b) => b - a);
    for (let i = 0; i < sortCitations.length; i++) {
      if (i >= sortCitations[i]) {
        return i;
      }
    }
    return sortCitations.length;
}

// 첫 번째 접근법: 테스트 케이스를 통과하지 못함....
// function solution(citations) {
//     const numberOfPaper = Math.max([...citations]);
//     let result = [];
//     let count = 1;
    
//     while(count <= numberOfPaper) {        
//         let citedPaper = citations.filter(element => element >= count);
//         if(citedPaper.length === count) result.push(count);
//         count += 1;
//     }
    
//     if(result.length === 0) return 0;
//     if(result.length !== 0) return result.sort((a, b) => b - a).shift();
// }
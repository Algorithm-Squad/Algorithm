/* 
시작시간 : 1/6(금) 21:40, 스탑시간 : 22:40(안풀림), 
재시작 : 1/7(토) 14:10 
*/
/* 
input 요소들의 합으로 target을 만들 수 있을까?
1. input을 for문으로 돈다.
2. pick 2
  2.1. 2 -> target 과 크기 비교
    - 크면 그대로 종료 : 빈 배열
    - 같으면 배열에 push 하고 리턴
    - 작으면:
    2.1.1. target - 2 = 5 가 있는지 배열에서 확인
    2.1.2. 있으면 -> pick하고 배열에 push
    2.1.3. 없으면 -> 다음 단계
  2.2. 2 에 같은 요소 더하기(2 + 2 = 4) 4  -> target 과 크기 비교

-> 구현 실패
*/

var combinationSum = function(candidates, target) {
  var answer = [];

  for(let i = 0; i < candidates.length; i++){
    var number = candidates[i];
    var combinations = [];

    var pickedNumber = findCombination(candidates, number, target, i);
    if(pickedNumber != undefined){
      combinations.push(pickedNumber);
      answer.push(combinations);
    }
  }
  return answer;
}

function findCombination (candidates, number, target, i) {
  if(number - target > 0){
    return;
  } else if (number - target === 0) {
    return number;
  } else {
    // number - target 이 0보다 작을 때
    var minus = target - number;
    if(candidates.includes(minus)){
      return minus;
    }
    var plusSameNumber = number + candidates[i];
    findCombination(candidates, plusSameNumber, target, i);
  }
}

console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([2,3,5], 8));
// console.log(combinationSum([2], 1));

/*
[ 내 풀이x DFS(깊이 우선 탐색) 사용 풀이 ]

*/

// function combinationSum(candidates, target) {
//   let result = [];

//   const dfs = (curCandidates, curTarget, value) => {
//       if(curTarget == 0)  result.push(value);
//       if(curTarget <= 0 ) return;
//       for(let g = 0; g < curCandidates.length; g++){
//           dfs(curCandidates.slice(g), curTarget-curCandidates[g], [...value, curCandidates[g]] );  
//       }
//   }
//   dfs(candidates, target, []);
//   return res;
// }

// console.log(combinationSum([2,3,6,7], 7));
// console.log(combinationSum([2,3,5], 8));
// console.log(combinationSum([2], 1));
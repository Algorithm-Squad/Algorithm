function solution(participant, completion) {
    participant.sort();
    completion.sort();

    return participant.find((player, index) => player !== completion[index]);
}

// 풀이 방법
// 1. sort와 find 활용
// 2. sort를 통해 이름을 정렬하고 두 배열의 인덱스의 값이 다른 값을 리턴


// 실패 방법. includes 활용
// forEach와 includes를 활용하여 participant의 배열에서 completion 배열에 없는 요소를 찾는다
// 동명이인이 있을 경우(이름이 중복될 경우) 문제 발생

// function solution(participant, completion) {
//     let result = [];
//     participant.forEach(player => {
//         if(!completion.includes(player)) result.push(player);
//     });
//     return result.join("");
// }
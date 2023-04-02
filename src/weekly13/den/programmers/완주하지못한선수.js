/**
 * 문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 
 * 시간복잡도: O(N)
 * 
 * @param {string[]} participant 
 * @param {string[]} completion 
 * @returns {string}
 */

function solution(participant, completion) {
  const participants = new Map();

  participant.forEach((person) => participants.set(person, (participants.get(person) || 0) + 1));
  completion.forEach((person) => {
    participants.set(person, (participants.get(person) - 1));
    if(participants.get(person) === 0) participants.delete(person);
  });

  return participants.keys().next().value;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // "vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"


		
	
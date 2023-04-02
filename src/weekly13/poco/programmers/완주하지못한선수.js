// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  for (let i = 0; i < sortedParticipant.length; i++) {
    if (sortedParticipant[i] !== sortedCompletion[i]) return sortedParticipant[i];
  }
}

// 매개변수
//participant : 마라톤 참가자들(배열)
//completion : 완주한 선수들의 이름(배열)

//문제 설명 및 해결
//마라톤 참가자들(배열)과 완주한 선수들의 이름(배열)이 매개변수로 주어질 때, 완주하지 못한 단 한 명의 선수의 이름을 return 하는 문제
//참가 선수와 완주한 선수들을 sort 매서드로 정렬한 뒤, for문 을 통해 해당 index의 값이 다른 경우, 해당 참가 선수의 이름을 바로 return 해서 해결!

//고민한 점
//의식의 흐름대로 문제를 풀다보니, 해시와 상관없는 방법으로 해결했는데, 문제가 속해있는 카테고리인 해시를 사용해서 한번 더 문제를 풀어봐야겠다!

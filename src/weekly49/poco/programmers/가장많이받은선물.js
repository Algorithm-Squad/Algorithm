// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
  const answer = {};
  const friendsObj = {};

  // friends 배열을 순회하면서, answer 객체와 friendsObj 객체를 초기화
  friends.forEach((friend) => {
    answer[friend] ? answer[friend] : (answer[friend] = 0);
    friendsObj[friend] = {
      give: 0,
      receive: 0,
      score: 0,
      giveFriends: {},
    };
  });

  // gifts 배열을 순회하면서, friendsObj 객체에 정보를 추가
  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(' ');
    friendsObj[giver].give++;
    friendsObj[giver].score++;
    friendsObj[receiver].receive++;
    friendsObj[receiver].score--;
    friendsObj[giver].giveFriends[receiver]
      ? friendsObj[giver].giveFriends[receiver]++
      : (friendsObj[giver].giveFriends[receiver] = 1);
  });

  // 이중 for문을 사용하여, friends 배열을 순회하면서, answer 객체에 값을 추가
  for (let i = 0; i < friends.length - 1; i++) {
    const giver = friends[i];
    for (let j = i + 1; j < friends.length; j++) {
      const receiver = friends[j];
      const giverScore = friendsObj[giver].score;
      const receiverScore = friendsObj[receiver].score;
      // giver가 receiver에게 선물을 주거나, receiver가 giver에게 선물을 준 경우
      if (
        friendsObj[giver].giveFriends[receiver] ||
        friendsObj[receiver].giveFriends[giver]
      ) {
        if (
          (friendsObj[giver].giveFriends[receiver]
            ? friendsObj[giver].giveFriends[receiver]
            : 0) >
          (friendsObj[receiver].giveFriends[giver]
            ? friendsObj[receiver].giveFriends[giver]
            : 0)
        ) {
          answer[giver]++;
        } else if (
          (friendsObj[giver].giveFriends[receiver]
            ? friendsObj[giver].giveFriends[receiver]
            : 0) <
          (friendsObj[receiver].giveFriends[giver]
            ? friendsObj[receiver].giveFriends[giver]
            : 0)
        ) {
          answer[receiver]++;
        } else if (
          (friendsObj[giver].giveFriends[receiver]
            ? friendsObj[giver].giveFriends[receiver]
            : 0) ===
          (friendsObj[receiver].giveFriends[giver]
            ? friendsObj[receiver].giveFriends[giver]
            : 0)
        ) {
          if (giverScore > receiverScore) {
            answer[giver]++;
          } else if (giverScore < receiverScore) {
            answer[receiver]++;
          }
        }
      }
      // giver가 receiver에게 선물을 주지 않았고, receiver가 giver에게 선물을 주지 않은 경우
      else if (
        !friendsObj[giver].giveFriends[receiver] &&
        !friendsObj[receiver].giveFriends[giver]
      ) {
        if (giverScore > receiverScore) {
          answer[giver]++;
        } else if (giverScore < receiverScore) {
          answer[receiver]++;
        }
      }
    }
  }

  return Math.max(...Object.values(answer));
}

console.log(
  solution(['a', 'b', 'c'], ['a b', 'b a', 'c a', 'a c', 'a c', 'c a'])
);

// console.log(
//   solution(
//     ['joy', 'brad', 'alessandro', 'conan', 'david'],
//     [
//       'alessandro brad',
//       'alessandro joy',
//       'alessandro conan',
//       'david alessandro',
//       'alessandro david',
//     ]
//   )
// );

// console.log(
//   solution(
//     ['muzi', 'ryan', 'frodo', 'neo'],
//     [
//       'muzi frodo',
//       'muzi frodo',
//       'ryan muzi',
//       'ryan muzi',
//       'ryan muzi',
//       'frodo muzi',
//       'frodo ryan',
//       'neo muzi',
//     ]
//   )
// );

// 매개변수
// friends : 친구들의 이름을 담은 1차원 문자열 배열
// gifts : 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열, ["A B"] 형태이며, A가 B에게 선물을 줬다는 의미이다.

// 출력
// 다음 달에 가장 많은 선물을 받을 친구가 받을 선물의 수

// 문제 설명 및 조건
// 친구들의 이름을 담은 1차원 문자열 배열 friends와 이번 달까지 친구들이 주고받은 선물 기록을 담은 1차원 문자열 배열 gifts가 매개변수로 주어질 때,
// 다음 달에 가장 많은 선물을 받을 친구가 받을 선물의 수를 구하는 문제.
// 만약 A와 B가 선물을 주고받았다면, 두 사람 사이에 더 많이 선물을 준 사람이 다음 달에 선물을 받는다.
// 만약 두 사람이 선물을 주고받지 않았거나, 두 사람 사이에 주고 받은 선물의 개수가 동일하다면, 선물 지수가 더 큰 사람이 더 작은 사람에게 하나를 받는다.
// 선물 지수는 이번 달에 선물을 준 횟수에서 받은 횟수를 뺀 값이다.
// 만약, 두 사람의 선물 지수까지 같다면 다음달에 선물을 주고 받지 않는다.

// 두 사람의 선물을 주고 받은 횟수가 다르다 -> 더 많이 준 사람이 다음 달에 선물을 받는다.
// 두 사람이 선물을 주고 받은 횟수가 같거나 주고 받은 적이 없다 -> 선물 지수 높은 사람이 받는다.
// 두 사람이 선물을 주고 받은 횟수가 같거나 주고 받은 적이 없으며, 선물 지수가 같다 -> 선물을 주고 받지 않는다.

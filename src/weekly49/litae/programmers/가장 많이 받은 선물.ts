export function solution(friends: string[], gifts: string[]): number {
  const n = friends.length;
  const result = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  const answer = Array(n).fill(0);
  const giftCounts = Array(n).fill(0);
  const receivedCounts = Array(n).fill(0);

  for (let i = 0; i < gifts.length; i++) {
    const [giver, receiver] = gifts[i].split(" ");
    const giverIndex = friends.indexOf(giver);
    const receiverIndex = friends.indexOf(receiver);

    result[giverIndex][receiverIndex]++;
    giftCounts[giverIndex]++;
    receivedCounts[receiverIndex]++;
  }

  for (let j = 0; j < n; j++) {
    for (let k = j; k < n; k++) {
      const giftIndexJ = giftCounts[j] - receivedCounts[j];
      const giftIndexK = giftCounts[k] - receivedCounts[k];

      // 둘을 비교해 더 많은 선물을 준 사람의 결과값을 플러스
      // 만약 서로 주고 받은 적이 없거나 같은 횟수를 주고 받은 경우, 선물 지수가 높은 사람의 결과값을 플러스
      if (
        result[j][k] > result[k][j] ||
        (result[j][k] === result[k][j] && giftIndexJ > giftIndexK)
      ) {
        answer[j]++;
      } else if (
        result[j][k] < result[k][j] ||
        (result[j][k] === result[k][j] && giftIndexJ < giftIndexK)
      ) {
        answer[k]++;
      }
    }
  }

  // 결과 배열을 반복문으로 돌며 선물을 가장 많이 받은 친구를 찾는다
  let maxOfGifts = 0;
  for (let l = 0; l < n; l++) {
    if (answer[l] > maxOfGifts) {
      maxOfGifts = answer[l];
    }
  }

  return maxOfGifts;
}

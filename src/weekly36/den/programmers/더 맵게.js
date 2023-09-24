function solution(scoville, K) {
  let mixedCount = 0;

  const sortedScoville = scoville.sort((a, b) => b - a);

  while (sortedScoville.length >= 2) {
    const [least, secondLeast] = [sortedScoville.pop(), sortedScoville.pop()];

    const mixedScov = calcMixedCov(least, secondLeast);

    sortedScoville.push(mixedScov);
    sortedScoville.sort((a, b) => b - a);

    mixedCount++;
  }

  return sortedScoville.at(-1) >= K ? mixedCount : -1;
}

const calcMixedCov = (least, secondLeast) => {
  return least + secondLeast * 2;
};

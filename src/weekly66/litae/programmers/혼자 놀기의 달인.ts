function solution(cards: number[]): number {
  let answer: number[] = [];
  cards.forEach((value) => {
    let i = value - 1;
    if (value !== 0) {
      for (let count = 1; count <= cards.length; ) {
        if (cards[i] === value) {
          cards[i] = 0;
          answer.push(count);
          break;
        } else {
          count++;
          const temp = cards[i] - 1;
          cards[i] = 0;
          i = temp;
        }
      }
    }
  });

  const sort = answer.sort((a, b) => b - a);
  return sort.length > 1 ? sort[0] * sort[1] : 0;
}

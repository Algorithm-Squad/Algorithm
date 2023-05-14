function solution(N, stages) {
  const resultArray = [];
  for (let i = 1; i < N + 1; i++) {
    let userInStage = stages.filter((stage) => stage === i).length;
    let playedUser = stages.filter((stage) => stage >= i).length;
    resultArray.push(userInStage / playedUser);
  }

  const resultIndex = resultArray
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value);

  return resultIndex.map((obj) => obj.index + 1);
}

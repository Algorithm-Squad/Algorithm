function solution(arr1: number[][], arr2: number[][]): number[][] {
  const answer: number[][] = [];

  for (let i = 0; i < arr1.length; i++) {
    let temp: number[] = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let result = 0;
      for (let k = 0; k < arr2.length; k++) {
        result += arr1[i][k] * arr2[k][j];
      }

      temp.push(result);
    }

    answer.push(temp);
  }

  return answer;
}

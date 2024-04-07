function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));

  let number = 1;
  let x = -1;
  let y = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) {
        x += 1;
      } else if (i % 3 === 1) {
        y += 1;
      } else if (i % 3 === 2) {
        x -= 1;
        y -= 1;
      }
      answer[x][y] = number++;
    }
  }

  return answer.flat().filter((el) => el !== 0);
}

console.log(solution(4)); // [1, 2, 9, 3, 10, 8, 4, 5, 6, 7]
console.log(solution(5)); // [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]
console.log(solution(6)); // [1, 2, 15, 3, 16, 14, 4, 17, 18, 13, 5, 6, 7, 8, 9, 10, 11, 12]

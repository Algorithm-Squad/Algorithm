function solution(n: number): number[] {
  let answer = new Array(n)
    .fill(0)
    .map((_, index) => new Array(index + 1).fill(0));
  // 삼각형에 들어가는 가장 큰 수
  const size = (n * (n + 1)) / 2;
  // x좌표값, y좌표값, 카운트(현재 수), 삼각형 크기
  let [x, y, count, number] = [0, 0, 1, n];

  if (n === 1) return [1];

  while (count <= size) {
    // 아래로 내려가기
    while (x < number && !answer[x][y]) {
      answer[x][y] = count;
      x++;
      count++;
    }
    x--;
    y++;

    // 오른쪽으로 가기
    while (y < number && !answer[x][y]) {
      answer[x][y] = count;
      y++;
      count++;
    }
    x--;
    y -= 2;

    // 위로 올라가기
    while (x >= 0 && !answer[x][y]) {
      answer[x][y] = count;
      x--;
      y--;
      count++;
    }

    (x += 2), y++;
  }

  // 2차원 배열을 1차원 배열로
  return answer.flat();
}

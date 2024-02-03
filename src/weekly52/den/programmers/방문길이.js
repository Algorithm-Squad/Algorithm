function solution(dirs) {
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const visited = new Set();

  let [x, y] = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    const [dx, dy] = move[dirs[i]];
    const [nx, ny] = [x + dx, y + dy];

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
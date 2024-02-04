// https://school.programmers.co.kr/learn/courses/30/lessons/49994

const solution = (dirs) => {
  const move = { U: [0, -1], D: [0, 1], R: [1, 0], L: [-1, 0] };
  const now = [0, 0];
  const visited = new Set();

  for (let i = 0; i < dirs.length; i++) {
    const [x, y] = now;
    const nextX = x + move[dirs[i]][0];
    const nextY = y + move[dirs[i]][1];

    // 주어진 좌표평면은 -5 ~ 5 이기 때문에 범위를 벗어나면 continue
    if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) continue;

    // 중복을 허용하지 않기 위해 현재지점, 다음지점 과 다음지점, 현재점을 저장
    // 처음 가본 지점이 아니라, 처음 가본 길이기 때문에, 2개의 경우를 저장해야한다.
    visited.add(`${nextX}${nextY}${x}${y}`);
    visited.add(`${x}${y}${nextX}${nextY}`);

    // 현재 지점의 좌표 변경
    now[0] = nextX;
    now[1] = nextY;
  }

  // 중복을 허용하지 않기 때문에 visited.size / 2를 반환
  return visited.size / 2;
};

console.log(solution('ULURRDLLU')); // 7

// 매개변수
// dirs : 이동할 경로("U", "D", "R", "L"로 이루어진 문자열)

// 출력
// dirs로 이동한 경로 중 처음 가본 길의 길이를 반환

// 문제 설명 및 해결
// dirs로 이동한 경로 중 처음 가본 길의 길이를 반환하는 문제이다.
// 처음 가본 길의 길이를 구하기 위해서는 Set 객체를 사용하여 중복을 허용하지 않아야한다.
// 먼저 "U", "D", "R", "L"로 이루어진 문자열을 객체로 만들어 이동할 수 있는 좌표를 만들었다.
// for문으로 dirs를 순회하면서, 현재 좌표와 다음 좌표를 구하고, 범위를 벗어나는 경우는 continue로 넘어가고,
// 중복을 허용하지 않기 위해 현재지점, 다음지점 과 다음지점, 현재점을 저장했다.
// 처음 가본 지점이 아니라, 처음 가본 길이기 때문에, 2개의 경우를 저장해야한다.
// 중복을 허용하지 않기 때문에 visited.size / 2를 반환하면 된다.

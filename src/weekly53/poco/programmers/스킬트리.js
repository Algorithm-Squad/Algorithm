// https://school.programmers.co.kr/learn/courses/30/lessons/49993

const solution = (skill, skill_trees) => {
  let answer = skill_trees.length;
  let tempIndex = 0;
  const skillArr = skill.split('');

  for (let i = 0; i < skill_trees.length; i++) {
    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skillArr.includes(skill_trees[i][j])) {
        if (skill_trees[i][j] === skillArr[tempIndex]) {
          tempIndex++;
        } else {
          answer--;
          tempIndex = 0;
          break;
        }
      }
    }
    tempIndex = 0;
  }
  return answer;
};

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])); // 2

// 매개변수
// skill : 선행 스킬 순서(문자열)
// skill_trees : 유저들이 만든 스킬트리(문자열이 담긴 배열)

// 출력
// 선행 스킬 순서에 맞게 유저들이 만든 스킬트리의 개수

// 문제 설명 및 해결
// 선행 스킬 순서에 맞게 유저들이 만든 스킬트리의 개수를 구하는 문제이다.
// answer는 skill_trees의 길이로 초기화하고 선행 스킬 순서에 맞지 않는 문자열이 나오면 감소시킨다.
// 선행 스킬 순서를 배열로 만들고 이중 for문으로 skill_trees의 각 요소를 순회하면서
// skill에 포함된 문자열이 있고 그 문자열이 선행 스킬 순서에 맞는지 확인한다.
// 선행 스킬 순서에 맞는 문자열이 나오면 tempIndex를 증가시키고 다음 문자열을 확인한다.
// 선행 스킬 순서에 맞지 않는 문자열이 나오면 answer를 감소시키고 break한다.

// 다른 사람 풀이
// function solution(skill, skill_trees) {
//   const regex = new RegExp(`[^${skill}]`, 'g');

//   return skill_trees
//     .map((x) => x.replace(regex, ''))
//     .filter((x) => {
//       return skill.indexOf(x) === 0;
//     }).length;
// }

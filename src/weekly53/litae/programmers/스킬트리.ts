export function solution(skill: string, skill_trees: string[]): number {
  let answer = 0;

  for (const tree of skill_trees) {
    if (isValidSkillTree(skill, tree)) {
      answer++;
    }
  }

  return answer;
}

function isValidSkillTree(skill: string, tree: string): boolean {
  let index = 0;

  for (const s of tree) {
    if (skill.includes(s)) {
      if (s !== skill[index]) {
        return false;
      }
      index++;
    }
  }

  return true;
}

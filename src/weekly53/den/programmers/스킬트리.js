/**
 * 시작시간: 16:22
 * 종료시간: 16:50
 * 
 * @param {string} skill
 * @param {string[]} skill_trees
 * 
 * @returns {number}
 */

function solution(skill, skill_trees){
  // 2중 for문으로 스킬트리 모음 배열 각각의 스킬트리를 순회한다.
  // 각 스킬이 선행 스킬 순서에 맞는지 확인하기용으로 index를 선언한다.
  let possibleTotalSkillTree = skill_trees.length;
  let currentSkillIndex = 0;
  
  for(let skill_tree of skill_trees){
    for(let currentSkill of skill_tree){
      const skillToCheck = skill.includes(currentSkill);

      if(skillToCheck){
        if(skill[currentSkillIndex] !== currentSkill) {
          possibleTotalSkillTree--;
          break;
        } else {
          currentSkillIndex++;
        }
      }
    }

    currentSkillIndex = 0;
  }

  return possibleTotalSkillTree;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
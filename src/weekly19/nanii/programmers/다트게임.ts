/**
 * 다트게임 / Lv1
 * https://school.programmers.co.kr/learn/courses/30/lessons/17682
 * S : 1 제곱 / D : 2 제곱 / T : 3 제곱
 * 점수 : * 는 2배(중첩시 4배), # 는 마이너스(중첩시 마이너스 2배)
 *
 * @param dartResult string
 * @returns 점수의 합계
 */
function solution(dartResult:any):number {
  const bonus = {
    S(n:number) { return n**1 },
    D(n:number) { return n**2 },
    T(n:number) { return n**3 }
  }
  const excuteBonus = (type:string) => (n:number) => {
    return bonus[type](n);
  }

  let answer:number[] = [];
  let temp = '';
  for(const str of dartResult) {
    if(str.match(/[0-9]/)) {
      temp+=str;
    }

    else if(bonus.hasOwnProperty(str)) {
      answer.push(excuteBonus(str)(Number(temp)));
      temp = '';
    } else if(str === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if(str === '#') {
      answer[answer.length - 1] *= (-1);
    }
  }
  return answer.reduce((a, b) => a + b);
}
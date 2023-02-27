// https://school.programmers.co.kr/learn/courses/30/lessons/42578

const solution = (clothes) => {
  let answer = 1;
  let clothesObj = {};
  clothes.forEach((el) => {
    let [clothe, types] = el;
    !clothesObj.hasOwnProperty(types)
      ? (clothesObj[types] = [clothe])
      : clothesObj[types].push(clothe);
  });

  for (property in clothesObj) {
    answer *= clothesObj[property].length + 1;
  }
  return answer - 1;
};

// 문제 설명 및 해결
// 의상 이름과 의상 종류가 담긴 2차원 배열이 주어졌을 때, 서로 다른 옷의 조합의 수를 반환하는 문제
// 최소 하루에 1개의 의상은 입고, 모든 종류의 의상을 무조건 착용하는 것은 아니다
// 먼저 종류별로 의상 갯수를 확인하기 위해, key는 의상종류, value는 의상들을 값으로 하는 배열을 갖는  clothesObj 객체를 생성
// 이후 각 의상 종류 갯수 + 1(해당 종류의 옷을 안입는 경우 존재)한 숫자들을 곱해주었고, 최종값에서 -1을 해주었다(모든 옷을 안입는 경우 제외)
// 시간복잡도 O(n)이상

/* 공부해볼 코드
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;
  }

function solution(clothes) {
  let key = new Map()
  for(let i = 0 ; i < clothes.length ; i ++){
      if(key.has(clothes[i][1])){
          key.set(clothes[i][1], key.get(clothes[i][1])+1)
      }else{
          key.set(clothes[i][1],1)
      }
  }
  let answer = 1
  for(let a of key.values()){
      answer *= (a+1)
  }


  return answer-1
}
*/

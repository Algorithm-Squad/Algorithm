/**
 * 뉴스클러스터링 / Lv.2
 * https://school.programmers.co.kr/learn/courses/30/lessons/17677
 * @param {*} str1
 * @param {*} str2
 * @returns
 * 유사도 : 교집합의 크기 (공통 원소의 개수) / 합집합의 크기 (모든 원소의 개수) * 65536
 * -> 공집합일 경우 나눗셈안되니까 1로 처리
 * -> 원소의 중복을 허용
 * -> 문자열 유사도는 2글자씩 끊어서 집합 생성 => 숫자, 특수문자, 공백이 있을 경우 버림 => 대소문자 구분 없음
 */
function solution(str1, str2) {
  const CONSTS = 65536;

  const arr1 = getArr(str1);
  const arr2 = getArr(str2);

  const set = new Set([...arr1, ...arr2]);
  let intersection = 0,
    union = 0;

  // 모든 원소를 포함하는 배열에서
  set.forEach((element) => {
    // 각 배열에 해당 원소가 몇개씩 있는지 확인
    const a = arr1.filter((e) => e === element).length;
    const b = arr2.filter((e) => e === element).length;
    // 교집합은 둘 중 작은 값, 합집합은 둘 중 큰 값
    intersection += Math.min(a, b);
    union += Math.max(a, b);
  });

  return union <= 0 ? CONSTS : Math.floor((intersection / union) * CONSTS);
}

const getArr = (str) => {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    const text = str.substr(i, 2).toLowerCase();
    if (text.match(/[^a-z]/)) continue;
    arr.push(text);
  }
  return arr;
};

const getInterSection = (arr1, arr2) => {
  const intersection = [];
  let tempArr2 = [...arr2];

  for (let i = 0; i < arr1.length; i++) {
    const target = arr1[i];
    const idx = tempArr2.indexOf(target);

    if (idx !== -1) {
      intersection.push(target);
      [...tempArr2.slice(0, idx), ...tempArr2.slice(idx + 1)];
    }
  }
  return intersection;
};

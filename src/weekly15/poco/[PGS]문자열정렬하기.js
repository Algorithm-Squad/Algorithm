// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map((el) => Number(el))
    .sort((a, b) => a - b);
}

// 매개변수
// my_string : 0~9까지의 숫자 한 개 이상과 영어 소문자로 이루어진 문자열

// 출력
// my_string 문자열 내에서 숫자만 골라서 오름차순으로 정렬해서 출력

// 문제 설명 및 해결
// 매개변수로 주어진 my_string에서 숫자만 골라내서 오름차순으로 정렬해서 출력하는 문제
// 정규표현식으로 my_string에서 숫자만을 골라낸 뒤, Number 메서드로 숫자화 시키고,
// sort 메서드로 오름차순 정렬

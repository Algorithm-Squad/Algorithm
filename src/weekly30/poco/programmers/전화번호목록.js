// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  const sortedPhoneBook = [...phone_book].sort();

  for (let i = 0; i < sortedPhoneBook.length - 1; i++) {
    if (sortedPhoneBook[i + 1].startsWith(sortedPhoneBook[i])) return false;
  }

  return true;
}

// 매개변수
// phone_book : 전화번호부에 적힌 전화번호를 담은 배열

// 출력
// 어떤 번호가 다른 번호의 접두사가 되는 번호가 있으면 false, 없으면 true

// 문제 설명 및 해결
// 어떤 번호가 다른 번호에 포함되는지 여부가 아닌 접두사인지 여부를 확인하는 문제
// 따라서, sort 메서드로 전화번호를 정렬시킨 후 for문을 통해 i + 1 번째의 번호가
// i 번째 번호를 접두사로 갖는지 확인하면 된다.
// 시간복잡도 : O(nlogn)

// 주의할 점
// 처음 startsWith 메서드 대신 includes를 사용했는데, 접두사가 아니라 포함되는지 여부를 확인하는 메서드이므로
// 테스트 코드 13번 실패 따라서, 접두사 여부를 확인할 수 있는 startsWith 메서드 사용
// 그리고 for문을 돌리는 범위를 배열의 맨 마지막 인수를 i + 1번째 값이 없기 때문에
// sortedPhoneBook.length - 1로 설정해야한다.

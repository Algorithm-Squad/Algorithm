// https://school.programmers.co.kr/learn/courses/30/lessons/42862
const solution = (n, lost, reserve) => {
  const student = Array.from({ length: n }, (v) => 1);

  lost.forEach((element) => {
    student[element - 1] = 0;
  });

  reserve.forEach((element) => {
    student[element - 1] += 1;
  });

  student.forEach((element, index, array) => {
    if (element === 0 && student[index - 1] === 2) {
      array[index] = 1;
      array[index - 1] = 1;
    } else if (element === 0 && student[index + 1] === 2) {
      array[index] = 1;
      array[index + 1] = 1;
    }
  });

  return student.filter((v) => v > 0).length;
};

// 문제 설명 및 해결
// 매개변수는 전체 학생의 수 n, 운동복을 잃어버린 학생 번호로 된 배열 lost, 여벌의 체육복을 가진 학생 번호로 된 배열 reserve
// 이때, 여벌의 체육복을 가진 학생은 운동복이 잃어버린 학생 중 본인 번호의 앞뒤 번호를 가진 학생에게 운동복을 빌려줄 수 있다.
// 여벌의 운동복을 가진 학생도 운동복을 잃어버릴 수 있다. 체육수업은 운동복을 1벌 이상 소유한 학생만 참여가 가능할 때,
// 체육수업을 들을 수 있는 학생의 수를 출력하는 문제
// 배열 요소의 값이 1이고, 학생 수 만큼의 길이를 가진 전체 학생의 운동복 현황을 나타내는 배열을 만들고, lost, reserve 배열을
// 순회하면서, 운동복을 잃어버린 학생은 0, 여벌의 운동복을 가진 학생은 2로 변경한다.
// 이후 전체 학생의 운동복 현황을 나타내는 배열을 순회하면서, 운동복이 없는 학생의 앞뒤 번호의 학생의 운동복 수를 확인하는 방법으로 문제 해결
// 시간복잡도 O(n) 이상

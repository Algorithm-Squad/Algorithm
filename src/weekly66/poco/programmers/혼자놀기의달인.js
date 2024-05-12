// https://school.programmers.co.kr/learn/courses/30/lessons/131130

const solution = (cards) => {
  const answer = [];
  // 상자를 방문했는지 확인하는 배열
  // index가 0부터 시작하기 때문에 -1을 해준다.
  const cardsArr = cards.map((card) => ({ num: card - 1, check: false }));

  for (let i = 0; i < cardsArr.length; i++) {
    // 해당 상자를 방문하지 않았으면
    if (cardsArr[i].check === false) {
      const boxGroup = [];
      let element = cardsArr[i];
      let nextIndex;
      let curIndex = i;

      while (true) {
        // 다음에 방문할 Index는 현재 element의 num이다.
        nextIndex = element.num;
        // 만약 다음에 방문할 Index가 이미 방문한 상자라면 break
        if (element.check === true) break;

        // 현재 상자(curIndex)를 방문했음을 표시하고
        cardsArr[curIndex].check = true;
        // 현재 상자(curIndex)를 다음에 방문할 상자로 변경
        curIndex = nextIndex;
        // 현재 방문한 상자를 boxGroup에 push
        boxGroup.push(element.num);
        // 다음에 방문할 상자를 element에 할당
        element = cardsArr[nextIndex];
      }
      // 다음 방문할 index의 상자가 이미 방문한 상자라면 while문 break 후에
      // answer에 boxGroup을 push
      answer.push(boxGroup);
    }
  }

  // 배열 요소의 길이를 내림차순으로 정렬
  answer.sort((a, b) => b.length - a.length);

  // 만약 상자 그룹이 한개라면 0을 return
  return answer.length < 2 ? 0 : answer[0].length * answer[1].length;
};

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4])); // 12

// 매개변수
// cards : 상자 안에 들어있는 카드 번호가 순서대로 담긴 배열

// 출력
// 이 게임에서 얻을 수 있는 최고 점수를 return

// 문제 설명 및 해결
// 2 이상 100 이하의 자연수를 정한다
// 그 수보다 작거나 같은 숫자 카드들을 모두 준비한다.
// 그 카드 숫자만큼 상자를 준비하고 준비된 상자에 카드를 한 장씩 넣는다.
// 상자를 무작위로 섞어 일렬로 나열한다.
// 상자가 일렬로 나열되면 상자가 나열된 순서에 따라 1번부터 순차적으로 증가하는 번호를 붙인다.
// 임의의 상자를 하나 선택하여 선택한 상자 안의 숫자 카드를 확인한다.
// 확인한 카드에 적힌 번호에 해당하는 상자를 열어 안에 담긴 카드에 적힌 숫자를 확인한다.
// 숫자에 해당하는 번호를 가진 상자를 계속해서 열어가며, 열어야 하는 상자가 이미 열려있을 때까지 반복한다.
// 연 상자들은 1번 상자 그룹이고 다른 상자들과 섞이지 않도록 따로둔다.
// 1번 상자 그룹을 제외하고 남는 상자가 없으면 게임이 종료되고 획득하는 점수는 0점이다.
// 남는 상자가 있다면 그 상자 중 임의의 상자 하나를 골라 상자 안의 카드를 확인하고 같은 방식으로 진행한다.
// 이렇게 연 상자들은 2번 상자 그룹이다.

// 1번 상자 그룹에 속한 상자의 수와 2번 상자 그룹에 속한 상자의 수를 곱한 값이 게임의 점수이다.
// 상자 안에 들어있는 카드 번호가 순서대로 담긴 배열 cards가 주어질 때, 이 게임에서 얻을 수 있는 최고 점수를 return.

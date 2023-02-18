/*
문제출처: https://school.programmers.co.kr/learn/courses/30/lessons/81302
시작: 10:30
종료: 12:30

결과: 통과.
시간복잡도: 지옥... forEach + 재귀
*/

function solution(places) {
  var answer = [];
  places.forEach((lounge) => answer.push(analysislounge(lounge)));
  return answer;
}

function analysislounge(lounge){
  const loungeIn2DArray = lounge.map(element => element.split(""));
  let interviewers = [];

  // 라운지의 면접자의 위치를 찾아서 interviewers 배열에 push
  loungeIn2DArray.forEach((array, X) => {
    array.forEach((position, Y) => {
      if(position === "P") interviewers.push([X, Y]);
    })
  });

  // for문과 재귀를 이용해, 각각의 면접자 간의 거리와, 면접자 사이에 빈 테이블 존재 여부에 따라 거리두기 준수 여부를 판단.
  for(let i = 0; i < interviewers.length - 1; i++){
    function socialDistancing(interviewer, index){
      // 재귀 제한조건: index 값이 인터뷰 인원 수 보다 커지면 재귀 종료
      if(index > interviewers.length - 2) return;

      // 기준이 되는 면접자 x, y 좌표
      let [interviewerX, interviewerY] = interviewer;
      // 기준 면접자와 비교할 다른 면접자의 x, y 좌표
      let [otherX, otherY] = interviewers[index + 1];
      // 기준 면접자와 다른 면접자 간 거리 계산
      let distance = Math.abs(interviewerX - otherX) + Math.abs(interviewerY - otherY);
      
      // 둘 간의 거리가 1일 떄,
      if(distance === 1) return 0;        
      // 둘 간의 거리가 2일 때,
      if(distance === 2){
        // 두 면접자가 대각선 위치에 있을 때,
        if(Math.abs(interviewerX - otherX) === 1){
          // 면접자 옆에 빈 테이블 있다면,
          if(loungeIn2DArray[interviewerX][otherY] === "O") return 0;
          if(loungeIn2DArray[otherX][interviewerY] === "O") return 0;
          // 옆에 빈 테이블이 없다면 그대로 진행  
        }
        // 두 면접자가 X축 기준 일직선 상에 있을 때,
        if(interviewerX === otherX){
          // 사이에 빈 테이블이 있다면
          if(loungeIn2DArray[interviewerX][interviewerY + 1] === "O") return 0;
          // 사이에 빈 테이블이 없다면 그대로 진행
        }
        // 두 면접자가 Y축 기준 일직선 상에 있을 때,
        if(interviewerY === otherY){
          // 사이에 빈 테이블이 있다면
          if(loungeIn2DArray[interviewerX + 1][interviewerY] === "O") return 0;
          // 사이에 빈 테이블이 없다면 그대로 진행
        }
      }
      // 기준이 되는 면접자와 다른 면접자 간 거리두기 준수 여부를 재귀를 이용해 순차적으로 판단
      return socialDistancing(interviewers[i], index + 1);
    }

    // 재귀의 결과가 0이라면, 0을 리턴
    if(socialDistancing(interviewers[i], i) === 0) return 0;
  }
  return 1;
}

console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], 
["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], 
["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], 
["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], 
["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));
function solution(numbers, hand) {
  var answer = "";
  let keypad = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    "*": [4, 1],
    0: [4, 2],
    "#": [4, 3],
  };
  let curLeftHand = [4, 1];
  let curRightHand = [4, 3];

  numbers.forEach((num) => {
    let numLocation = keypad[num];

    if (numLocation[1] === 1) {
      curLeftHand = numLocation;
      answer += "L";
    } else if (numLocation[1] === 3) {
      curRightHand = numLocation;
      answer += "R";
    } else {
      let distanceOfLeft = getDistance(curLeftHand, numLocation);
      let distanceOfRight = getDistance(curRightHand, numLocation);
      if (distanceOfLeft === distanceOfRight) {
        if (hand === "left") {
          curLeftHand = numLocation;
          answer += "L";
        } else {
          curRightHand = numLocation;
          answer += "R";
        }
      } else if (distanceOfLeft < distanceOfRight) {
        curLeftHand = numLocation;
        answer += "L";
      } else {
        curRightHand = numLocation;
        answer += "R";
      }
    }
  });
  return answer;
}

function getDistance(curPosition, numberPosition) {
  let result =
    Math.abs(curPosition[0] - numberPosition[0]) +
    Math.abs(curPosition[1] - numberPosition[1]);
  return result;
}

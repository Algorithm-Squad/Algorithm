const solution = (files) => {
  return files.sort((a, b) => {
    // 숫자가 나오기 직전인 HEAD를 정규표현식으로 구한다.
    let wordA = a.match(/^\D+/)[0].toLowerCase();
    let wordB = b.match(/^\D+/)[0].toLowerCase();

    // HEAD를 기준으로 정렬을 한다.
    // JavaScript에서 문자열 비교는 사전 순서로 이루어진다.
    if (wordA < wordB) {
      return -1;
    }
    if (wordA > wordB) {
      return 1;
    }

    // HEAD가 같을 경우, NUMBER부분을 정규표현식으로 구한다.
    let numberA = Number(a.match(/\d+/)[0]);
    let numberB = Number(b.match(/\d+/)[0]);

    // NUMBER의 크기에 따라 정렬을 한다.
    return numberA - numberB;
  });
};

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

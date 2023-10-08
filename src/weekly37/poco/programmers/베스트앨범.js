// https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const answer = [];

  const genresObj = {};
  // 장르별 총 재생횟수 계산
  genres.forEach((genre, index) => {
    genresObj[genre]
      ? (genresObj[genre] += plays[index])
      : (genresObj[genre] = plays[index]);
  });

  // 총 재생횟수에 따른 장르 내림차순 정렬
  const genresArr = Object.entries(genresObj);
  genresArr.sort((a, b) => b[1] - a[1]);

  // 모든 노래에 대한 정보 객체를 담은 배열
  const songInfo = genres.map((g, i) => ({
    genre: g,
    index: i,
    playCount: plays[i],
  }));
  console.log(songInfo);

  genresArr.forEach((genreInfo) => {
    // 현재 장르에 해당하는 노래를 담을 배열
    const current = [];

    // 전체 노래를 for문으로 순회하면서 현재 장르와 일치하는 노래를 current 배열에 push
    for (let i = 0; i < songInfo.length; i++) {
      if (genreInfo[0] === songInfo[i].genre) {
        current.push(songInfo[i]);
      }
    }
    // 같은 장르 노래 안에서, 가장 많이 재생된 노래별로 내림차순 정렬
    current.sort((a, b) => b.playCount - a.playCount);

    // 가장 많이 재생된 노래 2개 구하기
    current.forEach((song, index) => {
      if (index < 2) {
        answer.push(song.index);
      }
    });
  });

  return answer;
}

// 매개변수
// genres : 노래 장르가 담긴 배열
// plays : 각 노래가 재생된 횟수

// 출력
// 각 장르별로 가장 많이 재생된 노래 2개씩을 모아 출력

// 문제 설명 및 해결
// 장르별로 가장 많이 재생된 노래 2개씩을 모아 출력하는 문제
// 먼저 장르별 총 재생횟수를 계산하기 위해서, genres 배열을 순회하면서
// genresObj 객체에 장르별 총 재생횟수를 계산한다
// 그리고 genresObj 객체를 entries 메서드를 통해서 배열로 변환하고,
// 총 재생횟수에 따라 내림차순 정렬한다
// 그리고 모든 노래에 대한 정보를 songInfo 배열에 담는다
// 그리고 genresArr 배열을 순회하면서, 현재 장르에 해당하는 노래를 담을 배열을 생성한다
// 그리고 songInfo 배열을 순회하면서, 현재 장르와 일치하는 노래를 current 배열에 push 한다
// 그리고 current 배열을 순회하면서, 가장 많이 재생된 노래별로 내림차순 정렬한다
// 그리고 current 배열을 순회하면서, 가장 많이 재생된 노래 2개를 answer 배열에 push 한다

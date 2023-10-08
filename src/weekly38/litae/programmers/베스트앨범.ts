function solution(genres: string[], plays: number[]): number[] {
  const mapOfGenres = new Map<string, { index: number; playCount: number }[]>();

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const playCount = plays[i];

    if (mapOfGenres.has(genre)) {
      mapOfGenres.get(genre)!.push({ index: i, playCount });
    } else {
      mapOfGenres.set(genre, [{ index: i, playCount }]);
    }
  }

  mapOfGenres.forEach((songs, genre) => {
    songs.sort((a, b) => b.playCount - a.playCount);
  });

  // 힌트를 얻은 코드
  // 1. Map 객체의 각 엔트리(키-값 쌍)를 순회하며 엔트리의 배열을 생성 [key, value]
  // 2. sort를 통해 엔트리 배열을 정렬
  // 3. reduce 함수를 사용하여 이 배열 내의 playCount 값을 합산하여 sumA. sumB에 저장
  const sortedGenres = [...mapOfGenres.entries()].sort((a, b) => {
    const sumA = a[1].reduce((total, song) => total + song.playCount, 0);
    const sumB = b[1].reduce((total, song) => total + song.playCount, 0);
    return sumB - sumA;
  });

  const result: number[] = [];

  sortedGenres.forEach(([genre, songs]) => {
    const topTwoSongs = songs.slice(0, 2).map((song) => song.index);
    result.push(...topTwoSongs);
  });

  return result;
}

// 문제 풀이
// 1. 장르 이름을 key로 index와 플레이 수를 value로 하는 mapOfGenres(Map 객체)를 생성
// 2. mapOfGenres에 장르가 존재하는 경우 해당 장르의 배열에 새로운 인덱스와 플레이 수를 추가
// 3. mapOfGenres에 장르가 존재하지 않는 경우 해당 장르를 key로 하는 배열 생성
// 4. mapOfGenres의 각 장르별 플레이 수를 내림차순으로 정렬
// 5. sortedGenres를 통해 장르별로 재생 횟수 합계를 내림차순으로 정렬
// 6. 장르별로 가장 많이 플레이된 노래의 인덱스를 result 배열에 추가

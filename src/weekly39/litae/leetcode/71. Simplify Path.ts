function simplifyPath(path: string): string {
  const result: string[] = [];
  const pathArray = path.split("/").filter((word) => word !== "");

  pathArray.forEach((word) => {
    word === ".." ? result.pop() : word === "." ? "" : result.push(word);
  });

  return `/${result.join("/")}`;
}

// 오답 기록
// function simplifyPath(path: string): string {
//   const result: string[] = [];
//   const pathArray = path.split("/").filter((word) => word !== "");

//   pathArray.forEach((word) => {
//     word === ".." ? result.pop() : result.push(word);
//   });

//   return `/${result.join("/")}`;
// }

// path = "/a/./b/../../c/" 일 때
// 결과값이 "/a/c"로 출력되는 문제 발생(기대값은 "/c")
// "."일 때의 처리가 없었기 때문
// 로직에 "."인 경우를 추가

// 문제 풀이
// 1. path에 split과 filter를 통해 "/"가 제외된 요소를 가진 배열을 생성
// 2. forEach문을 통해 요소가 ".."인 경우 result 배열의 가장 마지막 요소를 제거(".."는 상위 폴더로 가는 개념이기 때문에 경로가 한단계 줄어듦)
// 3. 요소가 "."인 경우 아무 영향을 주지 않음("."는 현재 디렉토리)
// 4. 그 외는 result 배열에 경로를 추가
// 5. 가장 앞에 "/"를 붙여주고 join 메서드로 각 경로를 "/"로 연결하여 리턴

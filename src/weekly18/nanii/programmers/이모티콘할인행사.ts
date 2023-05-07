/**
 * 이모티콘 할인행사 / Lv2
 * https://school.programmers.co.kr/learn/courses/30/lessons/150368
 * @param users 사용자 n명의 구매 기준을 담은 2차원 정수 배열
 * @param emoticons 이모티콘 m개의 정가를 담은 1차원 정수 배열
 * @returns 이모티콘 플러스 서비스 가입 수가 가장 높고, 그때의 이모티콘 매출액을 담은 1차원 정수 배열
 */
function solution(users:number[], emoticons:number[]):number[] {

  const getDiscountPrice = (emoticon:number, rate:number) => emoticon * (100 - rate) / 100;
  let discountCase:number[][] = [];
  //할인율배열을 순회하면서 할인율 생성 10-10 / 10-20 / 10-30 / 10-40 / 20-10 / 20-20 ...
  const dfs = (emoticons:number[], discoutArray:number[]) => {
    const discountRate:number[] = [10, 20, 30, 40];

    //조합할 이모티콘 더이상 없을때
    if(emoticons.length < 1) {
      discountCase.push(discoutArray);
      return;
    }
    discountRate.forEach((rate) => {
      let discountedPrice:number[] = [];
      emoticons.forEach((emoticon) => {
        discountedPrice.push(getDiscountPrice(emoticon, rate));
      });
      //이모티콘배열을 1개씩 줄이고, 할인가를 적용한 가격 조합 배열을 넣음
      dfs(emoticons.slice(1), [discoutArray[1], ...discountedPrice]);
    });
  }

  dfs(emoticons, []);

  let answer:number[] = [];
  // let [member, total] = [0, 0];
  // discountRate.forEach((rate) => {
  //   users.forEach((user) => {
  //       let pay = 0;
  //       const discount = user[0];
  //       const userPurchasePrice = user[1];
  //         emoticons.forEach((_, idx) => {
  //             if(discount <= rate) pay += discountCase[rate][idx];
  //         });
  //         if(userPurchasePrice <= pay) member += 1;
  //         else total += pay;
  //     });
  // });
  return answer;
}
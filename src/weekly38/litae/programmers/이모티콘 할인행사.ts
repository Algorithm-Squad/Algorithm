export function solution(
  users: [number, number][],
  emoticons: number[]
): number[] {
  const result: number[] = [0, 0];
  const DISCOUNT_RATE: number[] = [10, 20, 30, 40];
  const caseOfDiscount: [number, number][][] = [];

  function dfs(emoticons: number[], result: [number, number][]) {
    if (emoticons.length < 1) {
      caseOfDiscount.push(result);
      return;
    }

    for (let i = 0; i < DISCOUNT_RATE.length; i++) {
      dfs(emoticons.slice(1), [...result, [DISCOUNT_RATE[i], emoticons[0]]]);
    }
  }

  dfs(emoticons, []);

  const calDiscount = (dis: number, price: number) =>
    ((100 - dis) / 100) * price;

  caseOfDiscount.forEach((discaseOfDiscount) => {
    const temp: [number, number] = [0, 0];
    users.forEach(([per, price]) => {
      let sum = 0;
      discaseOfDiscount.forEach(([dis, cost]) => {
        if (dis >= per) {
          sum += calDiscount(dis, cost);
        }
      });
      if (sum >= price) {
        temp[0] += 1;
      } else {
        temp[1] += sum;
      }
    });

    if (result[0] < temp[0]) {
      result[0] = temp[0];
      result[1] = temp[1];
    } else if (result[0] === temp[0]) {
      if (result[1] < temp[1]) {
        result[1] = temp[1];
      }
    }
  });

  return result;
}

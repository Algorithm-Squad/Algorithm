export function solution(
  N: number,
  road: [number, number, number][],
  K: number
): number {
  const deliveryTime: number[] = Array(N + 1).fill(500000);
  const queue: { to: number; time: number }[] = [];
  const roads: { to: number; time: number }[][] = Array.from(
    { length: N + 1 },
    () => []
  );

  road.forEach(([v1, v2, t]) => {
    roads[v1].push({ to: v2, time: t });
    roads[v2].push({ to: v1, time: t });
  });

  deliveryTime[1] = 0;
  queue.push({ to: 1, time: 0 });

  while (queue.length) {
    let { to, time } = queue.shift()!;

    roads[to].forEach((next) => {
      if (deliveryTime[next.to] > deliveryTime[to] + next.time) {
        deliveryTime[next.to] = deliveryTime[to] + next.time;
        queue.push(next);
      }
    });
  }

  return deliveryTime.filter((x) => x <= K).length;
}

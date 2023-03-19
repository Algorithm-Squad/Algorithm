function solution(bridge_length, weight, truck_weights) {
    if(truck_weights.length === 1) return bridge_length + 1;
    
    let queue = new Array(bridge_length).fill(0);
    let time = 0;
    
    while(queue.length) {
        time++;
        queue.shift();
        if(truck_weights.length) {
            const sumOfBridge = queue.reduce((acc, cur) => acc + cur, 0);
            if(sumOfBridge + truck_weights[0] <= weight) {
                queue.push(truck_weights.shift());
            } else {
                queue.push(0);
            }
        }
    }
    return time;
}

// 풀이 설명
// 1. 트럭이 한 대일 경우(truck_weights.length가 1일 경우), 첫 번째 트럭만 다리를 건너면 되기 때문에 다리 길이를 리턴
// 2. 큐의 역할(선입선출)을 하는 배열을 만들고, 배열의 크기는 다리의 길이, 0으로 초기화 -> 큐안에 있다는 것은 다리를 지나고 있는 것
// 3. 큐의 값이 모두 없어질 때까지 반복
// 4. 다리를 건너야 되는 트럭이 남아있을 경우, 다리 위를 건너고 있는 트럭의 무게 합과 다음 다리를 건너야 되는 트럭 무게의 합이 다리의 최대 하중보다 같거나 작으면 새로운 트럭 출발(enqueue)
// 5. 다리 위를 건너고 있는 트럭의 무게 합과 다음 다리를 건너야 되는 트럭 무게의 합이 다리의 최대 하중보다 크면, queue에 0을 넣어 초기화
// 6. 모든 트럭이 다리를 건너면 시간을 리턴

// 추가 고민사항
// 다른 풀이법과 비교하지 못했지만 테스트 케이스5의 경우 (2796.97ms, 36.9MB)로 최적화 된 방법은 아닌 것 같음...
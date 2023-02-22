function solution(maps) {
    let answer = 1;
    let queue = [];
    const row = [-1, 1, 0, 0];
    const column = [0, 0, -1, 1];
    const maxRow = maps.length;
    const maxColumn = maps[0].length;

    queue.push([0, 0]);
    
    maps[0][0] = 0;
    

    while(queue.length > 0) {
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            
            for(let j = 0; j < 4; j++) {
                let nx = x + row[j];
                let ny = y + column[j];

                if(nx >= 0 && nx < maxRow && ny >= 0 && ny < maxColumn && maps[nx][ny] === 1) {
                    if(nx == maxRow - 1 && ny == maxColumn - 1) {
                        return answer + 1;
                    }
                    queue.push([nx, ny]);
                    maps[nx][ny] = 0;
                }
            }
        }
        answer++;
    }
    return - 1;
}
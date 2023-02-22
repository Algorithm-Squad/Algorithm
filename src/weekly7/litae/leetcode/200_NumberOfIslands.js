var numIslands = function(grid) {
    const gridLength = grid.length
    const rowLength = grid[0].length
    let count = 0

    for(let i = 0; i < gridLength; i++){
        for(let j = 0; j < rowLength; j++) {
            if(grid[i][j]==="1") {
                dfs(i, j)
                count++
            }
        }
    }

    function dfs(i,j) {
        if(grid[i][j] ==="1") {
            grid[i][j] = '0'
            if(i - 1 >= 0) dfs(i-1,j)
            if(j + 1 < rowLength) dfs(i,j+1)
            if(i + 1 < gridLength) dfs(i+1,j)
            if(j - 1 >= 0) dfs(i,j-1)
        }
    }
    return count
};
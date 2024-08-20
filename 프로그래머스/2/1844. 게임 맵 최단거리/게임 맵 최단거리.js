function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const directions = [
        // 좌
        [-1,0],
        // 아래
        [1,0],
        // 좌
        [0,-1],
        // 우
        [0,1]
    ]
    
    // x, y , 시작 점
    const q = [[0,0,1]]

    const visited = Array.from(Array(n), () => Array(m).fill(false))
    visited[0][0] = true
    
    while(q.length) {
        const [x,y,distance] = q.shift()
        
        if (x === n - 1 && y === m - 1) {
            return distance;
        }
        
        for(let [dx, dy] of directions) {
            // 주변 탐색
            const nx = dx + x
            const ny = dy + y
        
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[nx][ny] && maps[nx][ny] === 1) {
               
                visited[nx][ny] = true
                q.push([nx, ny, distance+1])
            }
            
        }
    }
    return -1    
}

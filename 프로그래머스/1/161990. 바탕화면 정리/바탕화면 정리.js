function solution(w) {

    
    let minRow = w.length;
    let minCol = w[0].length;
    
    let maxRow = -1
    let maxCol = -1

    
    for(let i=0; i<w.length; i++) {
        for(let j=0; j<w[i].length; j++) {
            if(w[i][j] === '#') {
                minRow = Math.min(minRow, i)
                minCol = Math.min(minCol, j)
                maxRow = Math.max(maxRow, i)
                maxCol = Math.max(maxCol, j)
            }
        }
    }
        
    const result = [minRow, minCol, maxRow+1, maxCol+1]
    return result;
}
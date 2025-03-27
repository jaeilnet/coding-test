// #dp
function solution(land) {

    const n = land.length;
    
    const dp = Array.from({length:n}, ()=> Array(4).fill(0))
    
    
    for(let j=0; j< 4; j++) {
        dp[0][j] = land[0][j]
    }

    for(let i=1; i<n;i ++) {
        for(let j=0; j<4; j++) {
            for(let k=0; k<4; k++) {
                if(j!==k) {
                    dp[i][j] = Math.max(dp[i][j], dp[i-1][k] + land[i][j])
                }
                
            }
        }
        
    }

    return Math.max(...dp[n-1])
}
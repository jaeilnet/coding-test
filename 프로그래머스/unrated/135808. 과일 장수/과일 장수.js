function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => b-a)
    
    let arr = []
    for(let i=0; i<score.length; i+=m){
        arr.push(score.slice(i, i+m))
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i].length >= m ){
            answer += Math.min(...arr[i]) * m
            // console.log(arr[i], arr[i][m-1])
            // answer += arr[i][m-1] * m
        }
    }
    return answer;
}
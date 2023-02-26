function solution(sides) {
    var answer = 0;
    
    const min = Math.min(...sides)
    const max = Math.max(...sides)
    
    for(let i=max; i>0; i--){
        if( i + min > max) {
            answer++
        }
    }
    
    for(let i=min+max-1; i>0; i--) {
        if(max < i) {
            answer++
        }
    }
    

    
    return answer;
}
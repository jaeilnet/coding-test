function solution(s) {
    var answer = 0;
    
    const num = s.split(' ')
    
    for(let i=num.length-1; i>=0; i--){
        
        if(num[i] === 'Z' || num[i+1] === 'Z'){
            continue
        }
        
        answer += +num[i]
    }
    
    return answer;
}
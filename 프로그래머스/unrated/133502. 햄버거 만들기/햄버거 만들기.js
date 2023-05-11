function solution(is) {
    var answer = 0;
    const stack = []
   
    for(let i=0; i<is.length; i++){
        stack.push(is[i])
        
        if(stack.slice(-4).join("") === '1231'){
            answer++
            stack.splice(-4)
        }
    }
        
    return answer;
}
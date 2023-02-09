function solution(numbers, direction) {
    var answer = [];
    
    let temp = direction === 'left' ? numbers[0] : numbers[numbers.length -1]
    
    if(direction === 'right'){
        answer.push(temp)
    }
    
    for(let i=0; i<numbers.length-1; i++){
        if(direction === 'right'){
            answer.push(numbers[i])
        }else {
            answer.push(numbers[i+1])
        }
    }
    
    if(direction === 'left'){
        answer.push(temp)
    }
    
    
    return answer;
}
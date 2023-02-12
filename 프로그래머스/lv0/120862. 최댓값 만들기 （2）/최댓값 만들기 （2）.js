function solution(numbers) {    
    
    let result = -Infinity
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            result = Math.max(numbers[i] * numbers[j], result)
        }
    }
    
 
    return result
}
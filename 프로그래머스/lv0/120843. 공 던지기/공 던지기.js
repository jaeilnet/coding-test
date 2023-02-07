function solution(numbers, k) {
    var answer = 0;

    for(let i=0; i<k-1; i++) {
        answer += 2
        
        if(answer > numbers.length-1) {
            const idx =  answer - numbers.length
            
            console.log(answer, numbers.length, idx)
            answer = idx === -1 ? 0 : idx  
        }
    }
    
    return numbers[answer];
}
function solution(n) {
    var answer = 0;
    

    const fac = (num) => {
        if(num === 1) {
            return num
        }
        
        return num * fac(num-1)
    }
    
    for(let i=1; i<=10; i++){        
        if(fac(i) >= n){
            answer =  fac(i) === n ? i : i-1
            break;
        }

    }
    
    return answer;
}
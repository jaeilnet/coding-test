function solution(n, m) {
    
    const factorial = (num) => {
        if(num <= 1){
            return 1
        }
        
        return num* factorial(num-1)
    }
    
    const a = factorial((n - m))
    const b = factorial(n)
    const c = factorial(m);

    return Math.round(b / (a * c))
}
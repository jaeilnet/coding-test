function solution(a, b, n) {
    var answer = 0;
    
    const g = (n,a) => {
        if(n <= a) {
            if(n % a === 0) {
                answer += b
                return
            }
            
            return 
        }
        
        let rest = n % a
        let count = Math.floor(n / a) * b

        let sum = rest + count
    
        console.log(rest, count, sum, b)
        answer += count
        return g(sum , a)
    }

    g(n,a)

    
    return answer;
}
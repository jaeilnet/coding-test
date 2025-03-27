function solution(n, k) {
    
    const jinsu = n.toString(k)
    const candidates = jinsu.split('0').filter((v) => v!=='')
    
    const isPrime = (num) => {
        if(num <= 1) return false;
        if (num === 2) return true
        if(num % 2 === 0) return false;
        
        
        const sqrt = Math.sqrt(num)
        for(let i =3; i<=sqrt; i+=2) {
            if(num % i === 0) return false;
        }
        return true;
    }
    
    
    let count = 0;
    
    for(const candidate of candidates) {
        const num = parseInt(candidate, 10)
        if(isPrime(num)) count++
    }
    
    
    
return count
}
function solution(n, k) {
    
    
    const service = Math.floor(n / 10)
    
    
    return (n * 12000) + (k * 2000) - (service * 2000);
}
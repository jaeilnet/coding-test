function solution(n) {
    const num = Math.floor((n / 7)) 
    return n % 7 !== 0 ? Math.floor((n / 7) + 1) : Math.max(num, 1)
}
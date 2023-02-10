function solution(n) {
    const smallNumber = []
    let idx = 2
 
    while(n !== 1) {
       
        if(n%idx === 0) {
            smallNumber.push(idx)
            n/=idx
            idx = 2
        } else {
            idx += 1
        }
    }

    return Array.from(new Set(smallNumber))
}
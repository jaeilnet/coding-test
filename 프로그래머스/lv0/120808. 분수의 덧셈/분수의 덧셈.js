function solution(numer1, denom1, numer2, denom2) {

    
    let numer = (denom1 * numer2) + (numer1 * denom2)
    let denom = denom1 * denom2

    const max = Math.max(numer, denom)
    
    let a = 2
    
    while(max !== a){
        if(denom % a === 0 && numer % a === 0){
            denom = denom / a
            numer = numer / a
        }else {
            a++    
        }
    }
    

    
    
    
    return [numer, denom];
}
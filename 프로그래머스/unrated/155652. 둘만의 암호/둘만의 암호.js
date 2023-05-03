function solution(s, skip, index) {
    
    let last = 'z'.charCodeAt()
    
    const skips = skip.split("").map((e) => e.charCodeAt())
    
    const result = s.split('').map((e) => e.charCodeAt()).map((v) => {

        let idx = index
        
        for(let i=0; i<idx; i++){
            if(v === last){
                v -= 26
            }
            v++;
            
            skips.includes(v) && idx++
        }
        
        return String.fromCharCode(v)
    }).join('')
    
    return result
    
}
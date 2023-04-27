function solution(k, t) {
    var answer = [];

    let obj = {}
    
    k.forEach((e) => {
        const str = e.split('')
        
        str.forEach((s, i) => {
            if(isNaN(obj[s]) || obj[s] > i){
                obj[s] = i + 1
            }
        })
    })
    
    
    t.forEach((t) => {
        let sum = 0
        const str = t.split('')
        str.forEach((e) => {
            sum += obj[e]
        })
        
        answer.push(isNaN(sum) ? -1 : sum)
    })
    
   
    return answer;
}
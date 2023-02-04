function solution(array) {
    
    array.sort((a, b) => a-b) 
    
    let answer = 0
    
    let count = 1
    
    const obj = {}
    
    for(let i=0; i<array.length; i++){
        if(array[i] === array[i+1]){
            count ++
        }else {
            answer =  count
            obj[array[i]] = answer
            count = 1
        }
    }
    
    const objs = Object.entries(obj).sort((a, b) =>  b[1]- a[1])
   
    if (objs[0][1] === objs?.[1]?.[1]) {
        return -1
    }

    return +objs[0][0];
}
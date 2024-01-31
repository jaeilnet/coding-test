function solution(p, l) {
    var answer = 0;

    const arr = p.map((num,i)=>{ 
        return { num, i}
    })
    
    while(arr.length){
        const q= arr.shift()
        
        if(arr.some((el) => el.num > q.num)){
            arr.push(q)
        }else {
            answer++
            if(q.i=== l )break;
        }
        
    }
    
    return answer;
}
function solution(n) {
    var answer = 0;
    
    if(n === 1 ){
        return 1
    }
    
    let count = 1
    let i = 1

    while(count !== n) {
        i++
        if(i % 3 === 0 || i.toString().includes(3)){
            continue;
        }
        console.log(count,  i)
        
        count ++
        answer = i
    }
    
    return answer;
}
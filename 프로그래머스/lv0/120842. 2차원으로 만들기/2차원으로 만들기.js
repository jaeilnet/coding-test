function solution(num_list, n) {
    var answer = [];
    
    let temp = []
    let count = 0
    
    for(let i=0; i<=num_list.length; i++){
        if(count === n){
            answer.push(temp)
            temp = []
            count = 0
        }
        
        temp.push(num_list[i])
        count ++
    }
    
    return answer;
}
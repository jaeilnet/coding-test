function solution(my_string) {
    var answer = [];
    
    for(let key of my_string){
        if(!Number.isNaN(Number(key))){
            answer.push(+key)
        }
    }
    return answer.sort();
}
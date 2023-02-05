function solution(emergency) {
    var answer = []

    const sort = emergency.slice().sort((a,b) => b-a)

    for(let i =0; i<emergency.length; i++){
        answer.push(sort.indexOf(emergency[i])+1)   
    }
    
    
    return answer;
}
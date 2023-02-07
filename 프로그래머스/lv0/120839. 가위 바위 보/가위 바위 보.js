function solution(rsp) {
    
    const answer = rsp.split("").map((e) => {
        if(e === '2'){
            return 0
        }else if(e === '0') {
            return 5
        }else {
            return 2
        }
    }).join("")
    
    
    return answer;
}
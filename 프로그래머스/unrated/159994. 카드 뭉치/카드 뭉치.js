function solution(c1, c2, g) {
    var answer = "Yes";

    for(let s in g){
        if(c1[0] === g[s]){
            c1.shift()
        }else if(c2[0] === g[s]){
            c2.shift()
        }else {
            answer = "No"
        }
    }
    
    return answer;
}
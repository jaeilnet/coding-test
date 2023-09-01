function solution(p) {
    var answer = true;
    
        
    const hashMap = {}
    
    for(let i of p){
        hashMap[i] = 1
    }

    for(let i of p){
        let temp = ''
        for(let number of i){
            temp += number
            if(hashMap[temp] && temp !== i){
                return false
            }
            
        }
        
    }
    
    return answer;
}
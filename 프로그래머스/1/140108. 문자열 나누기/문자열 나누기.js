function solution(s) {
    var answer = 0;
    
    let first = ''
    
    let same = 0
    let other = 0
    
    for(let i=0; i<s.length; i++) {
        const st = s[i]
        
        // 첫 글자가 없다면 첫글자를 만들어준다
        if(!first) {
            first = st
        }
        
        // 첫글자와 같은지 다른지 판별
        if(first === st) {
            same ++
        }else {
            other ++
        }
        
        // 같은 글자 수
        if(same === other) {
            first = ''
            same = 0
            other = 0
            answer++
        }else if(i === s.length-1) {
            // 나머지 글자
            answer++
        }
        
        
    }
    
    
    return answer;
}
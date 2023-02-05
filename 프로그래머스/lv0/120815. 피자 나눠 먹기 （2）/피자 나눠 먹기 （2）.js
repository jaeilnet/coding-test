function solution(n) {
    var answer = 0;
    
//     5 6 = 1
//     5 12 = 10 2
//     5 18 = 15 3
//     5 24 = 20 4
//     5 30 = 6 0
    
    // 6 = 6 1
    
    // 10 6 = 4
    // 10 12 = 1.2
    // 10 18 = 1 / 8
    // 10 24 = 2 / 4
    // 10 30 = 5
    
    
    for(let i=1; i<=n; i++){
        if((i * 6) % n === 0){
            answer = i
            break;
        }
    }
    
    return n === 1 ? 1 : answer;
}
function solution(n) {
    var answer = 2;
    
    let num = 0
    const target = Math.floor(n / 2)
    
    while(num !== target){
        const nums = num * num
        if(nums === n){
            answer = 1
            break;
        }
        num++
    }
    
    return answer;
}
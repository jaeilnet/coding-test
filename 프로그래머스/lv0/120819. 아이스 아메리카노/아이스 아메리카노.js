function solution(money) {
    var answer = [];
    
    const coffeeFee = 5500

    answer.push(Math.floor(money / coffeeFee))
    answer.push(money % coffeeFee)
    
    
    return answer;
}
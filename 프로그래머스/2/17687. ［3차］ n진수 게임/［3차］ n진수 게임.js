function solution(n, t, m, p) {
    var answer = '';
    let sequence = ''
    let num = 0
    
    while(sequence.length < t * m) {
        let converted = num.toString(n).toUpperCase()
        sequence += converted
        num++
    }

    for(let i=p-1; i<sequence.length && answer.length < t; i+=m) {
        answer+=sequence[i]
    }
    
    return answer;
}
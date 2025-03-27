function solution(n, t, m, p) {
    
    let res = ''
    let seq = ''
    
    let num = 0
    
    while(res.length < t) {
        if(seq.length >= m) {
            res += seq[p-1]
            seq = seq.slice(m)
        }else {
            seq += num.toString(n).toUpperCase()
            num++
        }
    }
    
    return res
}
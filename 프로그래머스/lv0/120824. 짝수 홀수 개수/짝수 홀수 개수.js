function solution(num_list) {
    
    let odd = 0
    let hold = 0
    
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] % 2 === 0) {
            odd += 1
        }else {
            hold += 1
        }
    }
    
    
    return [odd, hold];
}
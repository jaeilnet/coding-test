function solution(arr) {
    if(arr.length <= 1) {
        return [-1]
    }
    
    let answer = arr.slice()

    let min = 0
    
    for(let i=0; i<arr.length -1; i++){
        let temp = 0
        let cur = arr[i]
        let next = arr[i+1]
        
        if(cur < next){
            temp = cur
            arr[i] = next
            arr[i+1] = temp
        }
        
        min = arr[arr.length-1]
        
    }
    
    return answer.filter((el) => el !== min);
}
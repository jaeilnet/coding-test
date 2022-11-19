function solution(food) {
    
    return food.reverse().reduce((acc, cur, idx) => {
        let calorie = (food.length - idx -1).toString()
        
        let str = calorie.repeat(Math.floor(cur/2))
        
        return str + acc + str
    }, 0)
}
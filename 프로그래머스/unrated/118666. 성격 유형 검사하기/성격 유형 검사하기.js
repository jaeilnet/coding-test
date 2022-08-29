function solution(survey, choices) {
    var answer = '';
    
    const obj = {}
    
    const type = [ "RT", "CF", 'JM', "AN"]
    
    for(let i of type){
        const split = i.split("").forEach((e) => {
            obj[e] = 0
        })
    }
    
    choices.forEach((e, i) => {
        const [disagree, agree] = survey[i]
    
        obj[e > 4 ? agree : disagree] += Math.abs(e - 4)
    
    })
    
    const result = type.map(([a,b]) => obj[b] > obj[a] ? b : a).join("")
    
    return result;
}
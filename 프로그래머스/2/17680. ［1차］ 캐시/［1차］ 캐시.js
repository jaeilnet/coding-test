function solution(cacheSize, cities) {
    
    
    if(!cacheSize) {
        return cities.length * 5
    }
    
    let answer = 0
    let cache = []
    
    for(let i=0; i<cities.length; i++) {
        const city = cities[i].toLowerCase()
        const cacheIndex = cache.indexOf(city)
        
        if(cacheIndex !== -1) {
            answer +=1
            
            cache.splice(cacheIndex, 1)
            cache.push(city)
        }else {
            answer+=5
            
            
            if(cache.length >= cacheSize) {
                cache.shift()
            }
            
            cache.push(city)
        }
        
        
    }
    
    return answer
}
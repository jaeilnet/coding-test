function solution(dot) {
    var answer = 0;
    
    
    const filter = dot.filter((e) => e < 0).length

    
        
    
    return filter === 1 && dot[1] < 0 ? 4 : filter + 1;
}
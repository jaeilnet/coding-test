function solution(my_string) {
    
    
    const split = my_string.split(/[^0-9]/gi).filter((e) => e)
    
    
    return split.reduce((acc, cur) => +acc + +cur, 0);
}
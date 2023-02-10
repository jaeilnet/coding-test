function solution(my_string) {
    
    const num =    [...my_string].reduce((acc, cur) => Number(cur) ? acc += +cur : acc, 0)
            

  
    
    return num;
}
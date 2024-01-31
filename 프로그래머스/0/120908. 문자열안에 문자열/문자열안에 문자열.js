function solution(str1, str2) {
    var answer = 0;
    
    const aa = str1.split(str2)
    
    return aa.length === 1 ? 2 : 1;
}
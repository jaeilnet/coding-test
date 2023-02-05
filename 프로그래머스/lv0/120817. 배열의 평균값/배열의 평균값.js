function solution(numbers) {
    var answer = 0;
    
    const avarage = numbers.reduce((acc, cur) => acc + cur) / numbers.length
    
    return avarage;
}
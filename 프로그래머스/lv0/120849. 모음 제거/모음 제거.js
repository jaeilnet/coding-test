function solution(my_string) {

    
    const aeiou = ['a','e','i','o','u']
    

    return  [...my_string].filter((e) => !aeiou.includes(e)).join("")
}
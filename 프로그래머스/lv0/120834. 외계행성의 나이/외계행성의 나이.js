function solution(age) {
    const eng = ['a','b','c','d','e','f','g','h','i','j','k','l','o','p','q','r','s','t','u','v','w','x','y','z']
        
    const ages = age.toString().split("")
    let result = ''
    
    for(let i=0; i<ages.length; i++){
        result += eng[ages[i]]
    }
    

    return result
}
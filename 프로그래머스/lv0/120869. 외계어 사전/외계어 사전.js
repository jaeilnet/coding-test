function solution(spell, dic) {
    var answer = 2;
    
    for(let i=0; i<dic.length; i++){
        if(spell.length !== dic[i].length){
            continue;
        }
        
        const dics = dic[i].slice().split("")
        
        for(let j=0; j<spell.length; j++){
            const idx = dics.findIndex((e) => e === spell[j])        
            if(idx === -1){
                answer = 2
                break;
            }
            dics.splice(idx, 1)
        }
        answer = !dics.length ? 1 : 2
    }

    return answer;
}
function solution(hp) {
    var answer = 0;
    
    while(hp >= 0){
        if(hp === 0){
            break;
        }
        
        if (hp >= 5){
            hp -= 5            
        }else if(hp >= 3 && hp <= 5) {
            hp -= 3
        }else if(hp <= 3){
            hp -= 1
        }        
    console.log(hp)
        
        answer ++
    }
  
    return answer;
}
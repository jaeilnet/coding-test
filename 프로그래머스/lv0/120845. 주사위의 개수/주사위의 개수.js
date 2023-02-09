function solution(box, n) {
    // 넓이부터 구하지 마시고 가로 세로 높이를 모서리 만큼 나눈다음 가로*세로*높이 해주시면 됩니다
    var answer = 1;
    
    for(let i=0; i<box.length; i++){
        answer *= Math.floor(box[i] / n)
    }
    
    return answer;
}
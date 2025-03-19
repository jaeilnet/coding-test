function solution(prices) {
    const answer = new Array(prices.length).fill(0)
    const stack = [] // [인덱스, 값] 으로 저장    
    
    for(let i=0; i< prices.length; i++) {
        // 현재 가격보다 떨어졌다면 해당 시간 계산하여 저장
        while(stack.length > 0 && prices[i] < prices[stack[stack.length-1]]) {
            const prevIdx = stack.pop()
            answer[prevIdx] = i - prevIdx
        }
        // 현재 스택에 인덱스 i번째 추가
        stack.push(i)
    }
    
    console.log(prices, stack)
    
    while(stack.length > 0 ) {
        const idx = stack.pop()
        answer[idx] = prices.length -1 - idx
    }
    
    return answer;
}
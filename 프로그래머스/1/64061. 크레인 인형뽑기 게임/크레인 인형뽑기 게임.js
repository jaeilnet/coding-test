// 스택/큐
function solution(board, moves) {
    var answer = 0;
    
    // [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
    // [1,5,3,5,1,2,1,4] = input
    
    const stack = []

    // 4 5 5 
    
    const startBoard = (board, pointer) => {
        if(pointer === moves.length) {
            return
        }

         for(let i=0; i<board.length;i ++) {
            const row = board[i]
            
            for(let j=0; j<row.length; j++) {
                const selected = board[j][moves[pointer]-1]
                if(selected) {
                    board[j][moves[pointer]-1] = 0
                    if(stack.length && stack[stack.length-1] === selected) {
                        stack.pop()
                        answer+=2
                    }else {
                        stack.push(selected)
                    }
           
                    return startBoard(board, pointer+1)
                }
                }
            }
            return startBoard(board, pointer +1)
    }
    
   
    startBoard(board, 0)
  
    console.log(stack)

    return answer;
}
function solution(keyinput, board) {
    var answer = [0, 0];
    
    const boards = board.map((e) =>  ((e-1) /2 ))
    console.log(boards)
  
    const key = (po) => {
        switch (po){
            case 'left':
                if(boards[0] === 0){
                    return
                }
                boards[0] -=1
                return answer[0] -=1
            case 'right':
                 if(boards[0] === board[0]-1){
                    return
                }
                boards[0] +=1
                return answer[0] +=1
            case 'up':
                if(boards[1] === board[1]-1){
                    return
                }
                 boards[1] +=1
                return answer[1] +=1
            case 'down':
                if(boards[1] === 0){
                    return
                }
                boards[1] -=1
                return answer[1] -=1
            default:
                return answer
        }
    }
    keyinput.forEach((e) => {
        key(e)
    })

    return answer;
}
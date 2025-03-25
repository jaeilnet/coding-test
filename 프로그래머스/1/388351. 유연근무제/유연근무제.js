function solution(s, t, d) {
    var answer = 0;
    
    // 1은 월요일, 2는 화요일, 3은 수요일, 4는 목요일, 5는 금요일, 6은 토요일, 7은 일요일
    
    const createDate = (startDay, dates) => {
        const date = []
        let day = startDay
        
        for(let i = 0; i< dates.length; i++) {
            if(day > 7) {
                day = 1
            }
            date.push(day)
            day++
        }
        return date
    }
    
    const dates = createDate(d, t[0])
    
    const addTenMinutes= (time) => {
        const hour = Math.floor(time / 100)
        const minute = time  % 100
        
        let newMinute = minute + 10
        let newHour = hour;
        
        if(newMinute >= 60){
            newHour++
            newMinute -= 60
        }
        return newHour * 100 + newMinute
    }
    
    
    for(let i=0; i<t.length; i++) {
        let isLate = false;
        const allowedTime = addTenMinutes(s[i])
    
        for(let j=0; j<t[i].length; j++) {
            // 주말 생략
            if(dates[j] > 5) continue;
            
            if(t[i][j] > allowedTime) {
                isLate = true
                break;
            }

        }
        
        if(!isLate) {
            answer++
        }
    }
    
    return answer;
}
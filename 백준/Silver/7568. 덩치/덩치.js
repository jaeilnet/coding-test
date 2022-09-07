const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N =  Number(input.shift());
//6:08

let arr = [];
for(let i=0; i < input.length; i++) {
    arr.push(input[i].split(' ').map(x=>+x));
}


let count = 0;
let answer = '';
for(let i=0; i < arr.length; i++) {
    count = 0;
    for(let j=0; j < arr.length; j++) {
        if(arr[i][0] < arr[j][0]) {
            if(arr[i][1] < arr[j][1]) {
                count++;
            }
        }
    }
    
    answer += count+1 + ' ';
}

console.log(answer);
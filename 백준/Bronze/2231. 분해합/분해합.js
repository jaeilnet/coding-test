const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);

function num(num) {
  const nums = num;
  let result = 0;

  let min = Infinity;

  for (let i = 0; i < nums; i++) {
    let sum = 0;
    let str = String(num);

    for (let j = 0; j < str.length; j++) {
      sum += +str[j];
    }
    if (sum + num === nums) {
      result = Math.min(min, num);
    }
    num--;
  }

  return result;
}

console.log(num(N));

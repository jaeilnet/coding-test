const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

let num = +input;

let answer = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
  answer[i] = answer[i - 1] + 1;

  if (i % 3 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 3] + 1);
  }

  if (i % 2 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 2] + 1);
  }
}

console.log(answer[num]);

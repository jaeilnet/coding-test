const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

let count = 1;
let max = Math.max(...input.sort());

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i + 1]) {
    count++;
    max = input[i];
  }
}

let result = 0;

if (count === 1) result = max * 100;
else result = 10 ** (count + 1) + max * 10 ** count;

console.log(result);

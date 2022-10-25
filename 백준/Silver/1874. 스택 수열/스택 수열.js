const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/1874/input.txt";

const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = [];
let stack = [];

let count = 1;

for (let i = 0; i < n; i++) {
  let num = arr[i];

  // 아무조건 없이 + 8개를 넣는다
  while (count <= num) {
    stack.push(count);
    count++;
    answer.push("+");
  }

  let stackpop = stack.pop();
  answer.push("-");

  if (stackpop !== num) {
    answer = ["NO"];
    break;
  }
}

console.log(answer.join("\n"));

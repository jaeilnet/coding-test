const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/큐/11866/input.txt";

const [N, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array.from({ length: N }, (v, i) => i + 1);

let answer = [];
let count = 1;

while (arr.length) {
  const num = arr.shift();

  // 3 % 3 = 0
  if (count % K === 0) {
    answer.push(num);
  } else {
    arr.push(num);
  }

  count++;
}

console.log(`<${answer.join(", ")}>`);

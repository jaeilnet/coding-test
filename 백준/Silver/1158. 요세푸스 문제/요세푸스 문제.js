const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let s = Array.from({ length: N }, (v, i) => i + 1);

const answer = [];
let i = 1;

while (s.length) {
  const n = s.shift();

  if (i % M === 0) {
    answer.push(n);
  } else {
    s.push(n);
  }

  i += 1;
}

console.log(`<${answer.join(", ")}>`);

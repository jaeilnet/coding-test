const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/집합과 맵/1764/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");

const Nset = new Set();
const Mset = new Set();
for (let i = 0; i < input.length; i++) {
  if (i < N) {
    Nset.add(input[i]);
  } else {
    Mset.add(input[i]);
  }
}

let answer = [];
Mset.forEach((item) => {
  if (Nset.has(item)) answer.push(item);
});
answer.sort();
console.log(answer.length + "\n" + answer.join("\n"));

let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, A, M, B] = input.map((v) => v.split(" ").map((x) => Number(x)));

let answer = [];

A.sort((a, b) => a - b);

B.forEach((e) => {
  let start = 0;
  let end = A.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (e < A[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  A[middle] === e ? answer.push(1) : answer.push(0);
});

console.log(answer.join("\n"));
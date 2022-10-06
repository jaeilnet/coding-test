const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./정렬/25305/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, k] = input[0].split(" ").map(Number);
const x = input[1].split(" ").map(Number);

console.log(x.sort((a, b) => b - a)[k - 1]);
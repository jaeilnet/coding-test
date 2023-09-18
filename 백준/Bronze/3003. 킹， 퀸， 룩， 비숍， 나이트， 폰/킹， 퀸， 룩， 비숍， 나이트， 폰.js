const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs.readFileSync(filePath).toString().split(" ");

const pice = [1, 1, 2, 2, 2, 8];

let result = [];

input.forEach((num, i) => {
  const minus = pice[i] - +num;

  result.push(minus);
});

console.log(result.join(" "));

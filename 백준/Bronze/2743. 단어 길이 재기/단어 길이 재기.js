const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs.readFileSync(filePath).toString();

console.log(input.trim().length);

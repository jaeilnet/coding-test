const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(input.reduce((sum, num) => +sum + +num));

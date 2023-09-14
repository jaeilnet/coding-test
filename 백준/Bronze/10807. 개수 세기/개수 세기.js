const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input[input.length - 1];
const nums = input[1].toString();

const result = nums.split(" ").filter((el) => +el === num).length;

console.log(result);

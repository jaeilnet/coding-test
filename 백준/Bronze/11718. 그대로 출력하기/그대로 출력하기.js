const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

input.forEach((el) => {
  console.log(el);
});

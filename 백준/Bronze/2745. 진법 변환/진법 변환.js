const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const [n, b] = fs.readFileSync(filePath).toString().split(" ");

let ans = parseInt(n, Number(b));

console.log(ans);

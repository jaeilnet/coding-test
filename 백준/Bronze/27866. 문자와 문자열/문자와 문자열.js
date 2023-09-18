const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const [n, m] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.toString().split(" "));

const string = n.toString();
const ms = m.toString();

console.log(string[ms - 1]);

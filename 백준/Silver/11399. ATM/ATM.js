const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/누적합/11399/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const time = input.map((e) => e.split(" ").map(Number)).flat();

// [[1, 3], [2, 1], [3, 4], [4, 3], [5, 2]]

let arr = [];

time.forEach((e, i) => {
  return arr.push([i + 1, e]);
});

arr.sort((a, b) => {
  return a[1] - b[1];
});

let result = [];
let sum = 0;

arr.forEach((e, i) => {
  result.push((sum += e[1]));
});

let answer = result.reduce((acc, cur) => acc + cur);

console.log(answer);

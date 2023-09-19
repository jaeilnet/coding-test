const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let max = 0;
let maxX = 1;
let maxY = 1;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (max < input[i][j]) {
      max = input[i][j];
      maxX = i + 1;
      maxY = j + 1;
    }
  }
}

console.log(max);
console.log(maxX, "", maxY);

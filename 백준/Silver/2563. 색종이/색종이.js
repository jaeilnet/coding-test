const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const [n, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let arr = new Array(100).fill().map((el) => new Array(100).fill(false));

for (let i = 0; i < input.length; i++) {
  let x = input[i][0];
  let y = input[i][1];

  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      arr[x + j][y + k] = true;
    }
  }
}

let result = arr.reduce((acc, cur) => {
  for (let el of cur) {
    if (el) acc++;
  }

  return acc;
}, 0);

console.log(result);

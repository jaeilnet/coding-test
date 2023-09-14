const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const time = n.split(" ");

let hour = Number(time[0]);
let min = Number(time[1]) + +arr[0];

while (min >= 60) {
  hour++;
  min = min - 60;
}

console.log(hour >= 24 ? hour - 24 : hour, min);

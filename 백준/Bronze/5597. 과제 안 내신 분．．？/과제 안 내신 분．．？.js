const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const result = [];

for (let i = 1; i <= 30; i++) {
  const isNum = input.some((num) => i === +num);

  if (!isNum) result.push(i);
}

result.forEach((num) => console.log(num));

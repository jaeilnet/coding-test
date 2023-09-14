const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = 0;

input.forEach((el) => {
  const [price, count] = el.split(" ");
  if (count && price) sum += count * price;
});

console.log(sum === +input[0] ? "Yes" : "No");

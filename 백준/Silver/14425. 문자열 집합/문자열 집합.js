
const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./준/집합과 맵/14425/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n] = input.shift().split(" ").map(Number);
const strInput = input.map((i) => i.trim());
// console.log(strInput);
const list = strInput.slice(0, n);
const candidate = strInput.slice(n);
const set = new Set(list);

// let ans = 0;
// candidate.forEach((str) => {
//   if (set.has(str)) ++ans;
// });

// console.log(ans);

let count = 0;

candidate.forEach((e) => {
  if (set.has(e)) ++count;
});

console.log(count);

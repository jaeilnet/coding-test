const fs = require("fs");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./준/집합과 맵/14425/input.txt";

// const [[n], ...S] = fs.readFileSync(filePath).toString().trim().split("\n");
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const M = S.splice(0, a[0]);

// console.log(M, S);

// const input = [...S].map((e) => e.trim());

const [n] = input.shift().split(" ").map(Number);

const list = input.slice(0, n);
const candidate = input.slice(n);
// console.log(list, candidate);
const set = new Set(list);

let count = 0;

candidate.forEach((e) => {
  if (set.has(e)) ++count;
});

console.log(count);

// const fs = require("fs");
// const filePath =
//   process.platform === "linux"
//     ? "/dev/stdin"
//     : "./준/집합과 맵/14425/input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const [n] = input.shift().split(" ").map(Number);
// const strInput = input.map((i) => i.trim());
// console.log(strInput);
// const list = strInput.slice(0, n);
// const candidate = strInput.slice(n);
// const set = new Set(list);

// let ans = 0;
// candidate.forEach((str) => {
//   if (set.has(str)) ++ans;
// });

// console.log(ans);

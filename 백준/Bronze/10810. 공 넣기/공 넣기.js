const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((re) => re.split(" "));

let result = Array(+n[0]).fill(0);

for (let i = 0; i < n[1]; i++) {
  const [start, end, number] = arr[i];

  for (let j = +start; j <= +end; j++) {
    result[j - 1] = +number;
  }
}

console.log(result.join(" "));

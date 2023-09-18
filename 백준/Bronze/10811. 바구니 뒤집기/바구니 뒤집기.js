const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.split(" "));

const numArr = Array.from({ length: +n[0] }, (v, i) => i + 1);

for (let i = 0; i < arr.length; i++) {
  const start = arr[i][0] - 1;
  const end = arr[i][1] - 1;
  let count = Math.floor(start / end);

  for (let j = start; j < end; j++) {
    if (j > end - count) break;
    const temp = numArr[j];
    numArr[j] = numArr[end - count];
    numArr[end - count] = temp;

    count++;
  }
}

console.log(numArr.join(" "));

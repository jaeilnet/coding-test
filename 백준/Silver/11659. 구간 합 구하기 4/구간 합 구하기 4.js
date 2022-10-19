const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/누적합/11659/input.txt";


  const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

  input.shift();
  const map = input.shift().split(" ").map(Number);
  const tc = input.map((item) => item.split(" ").map(Number));

  const arr = Array.from({ length: map.length + 1 }).fill(0);

  map.forEach((e, i) => {
    arr[i + 1] = arr[i] + e;
  });

  let answer = "";

  tc.forEach((e) => {
    answer += arr[e[1]] - arr[e[0] - 1] + "\n";
  });

  console.log(answer);
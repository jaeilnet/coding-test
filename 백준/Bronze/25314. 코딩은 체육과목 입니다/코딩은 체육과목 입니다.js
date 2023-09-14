const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const size = Math.floor(input / 4);

const result = Array.from({ length: size }, (v, i) => "long");

console.log(result.join(" ") + " int");

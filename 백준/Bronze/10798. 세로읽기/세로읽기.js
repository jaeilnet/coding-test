const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()

  .split("\n")
  .map((el) => el.split(""));

const loop = (input) => {
  let len = Math.max(...input.map((i) => i.length));
  let count = 0;

  let str = [];

  const loops = (count) => {
    if (len === count) return str;

    for (let i = 0; i < input.length; i++) {
      str.push(input[i][count]);
    }
    count++;
    loops(count);
  };

  loops(count);

  return str;
};

const result = loop(input);

console.log(result.join(""));

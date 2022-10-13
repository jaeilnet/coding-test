const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/1181/input.txt";

const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const sorted = [];

const legnthhArr = input.map((e) => e.length);

const max = Math.max(...legnthhArr);
const min = Math.min(...legnthhArr);

for (let i = min; i <= max; i++) {
  let group = [];

  for (let j = 0; j < N; j++) {
    if (input[j].length === i) {
      if (group.indexOf(input[j]) === -1) group.push(input[j]);
    }
  }

  if (group.length > 1) {
    sorted.push(...group.sort());
  } else {
    sorted.push(...group);
  }
}

console.log(sorted.join("\n"));

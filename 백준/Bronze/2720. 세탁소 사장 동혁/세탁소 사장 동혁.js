const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const [n, ...b] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const item = [25, 10, 5, 1];

const result = [];

for (let i = 0; i < b.length; i++) {
  let num = +b[i][0];
  let save = [0, 0, 0, 0];

  for (let j = 0; j < item.length; j++) {
    while (num !== 0) {
      if (num >= item[j]) {
        num = num - item[j];
        save[j]++;
      } else {
        break;
      }
    }
  }
  result.push(save);
}

result.forEach((el) => {
  console.log(el.join(" "));
});

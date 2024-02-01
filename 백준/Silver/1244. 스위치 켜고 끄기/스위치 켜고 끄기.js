const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, nums, students, ...rest] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = nums.split(" ").map(Number);

rest.forEach((el, i) => {
  const [st, num] = el.split(" ").map(Number);

  if (st === 1) {
    for (let i = 1; i <= arr.length; i++) {
      if (i % num === 0) {
        arr[i - 1] = arr[i - 1] === 0 ? 1 : 0;
      }
    }
  } else {
    const range = Math.max(num - 1, arr.length - num);
    arr[num - 1] = arr[num - 1] === 0 ? 1 : 0;

    for (let i = 1; i < range; i++) {
      if (arr[num - 1 - i] !== arr[num - 1 + i]) break;
      arr[num - 1 - i] = arr[num - 1 - i] === 0 ? 1 : 0;
      arr[num - 1 + i] = arr[num - 1 + i] === 0 ? 1 : 0;
    }
  }
});

let result = [];
while (arr.length > 0) {
  result.push(arr.splice(0, 20).join(" "));
}

console.log(result.join("\n"));

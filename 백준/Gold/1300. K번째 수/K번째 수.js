const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./이분탐색/1300/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const [N, k] = input;

let left = 1;
let right = k;
let answer = 0;

function countOrder(mid) {
  let cnt = 0;

  for (let i = 1; i <= N; i++) {
    // console.log(cnt);
    cnt += Math.min(parseInt(mid / i), N);
  }

  return cnt;
}

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let count = countOrder(mid);

  if (count >= k) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);

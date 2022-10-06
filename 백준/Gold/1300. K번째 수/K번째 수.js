const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./이분탐색/1300/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const [N, k] = input;

let start = 1;
let end = k;

function counter(mid) {
  let cnt = 0;

  for (let i = 1; i <= N; i++) {
    cnt += Math.floor(Math.min(mid / i, N));
  }

  return cnt;
}

let answer = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let count = counter(mid);

  if (count >= k) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(answer);

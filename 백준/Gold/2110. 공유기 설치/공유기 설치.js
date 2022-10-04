const fs = require("fs");

const filepath =
  process.platform === "linux" ? "dev/stdin" : "./이분탐색/2110/input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const [A, B] = input.shift().split(" ").map(Number);

let ary = input.map(Number).sort((a, b) => a - b);

function count(ary, mid) {
  let endPosition = ary[0];
  let cnt = 1;

  for (let i = 0; i < ary.length; i++) {
    if (ary[i] - endPosition >= mid) {
      cnt++;
      endPosition = ary[i];
    }
  }

  return cnt;
}

function binary(ary, B) {
  let answer = 0;
  let start = 1;
  let end = ary[ary.length - 1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (count(ary, mid) >= B) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

console.log(binary(ary, B));

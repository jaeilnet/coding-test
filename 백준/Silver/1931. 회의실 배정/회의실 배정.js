let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
input.shift();
input = input.map((element) => element.split(" "));
input.sort((a, b) => {
  // 회의가 끝나는 시간을 기준으로 정렬, 끝나는 시간이 같다면 일찍 시작하는 순으로 정렬
  a[0] = Number(a[0]);
  a[1] = Number(a[1]);
  b[0] = Number(b[0]);
  b[1] = Number(b[1]);

  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let count = 0;
let previousEnd = 0;
let currentStart;
let currentEnd;
for (let i = 0; i < N; i++) {
  currentStart = input[i][0];
  currentEnd = input[i][1];
  if (currentStart < previousEnd) {
    // 현재 회의 시작시간이 이전 회의 종료시간보다 일찍 시작하면 넘어가기
    continue;
  } else {
    count++;
  }
  previousEnd = currentEnd;
}

console.log(count);
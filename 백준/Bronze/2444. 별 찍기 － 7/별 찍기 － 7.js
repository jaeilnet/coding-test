const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";
const N = Number(fs.readFileSync(filePath));

/* 2. 1부터 N-1까지 공백과 별 찍기 */
for (let i = 1; i < N; i++) {
  let blank = " ".repeat(N - i);
  let stars = "*".repeat(i + (i - 1));
  console.log(blank + stars);
}

/* 3. N부터 1까지 공백과 별 찍기 */
for (let j = N; j > 0; j--) {
  let blank = " ".repeat(N - j);
  let stars = "*".repeat(j + (j - 1));
  console.log(blank + stars);
}

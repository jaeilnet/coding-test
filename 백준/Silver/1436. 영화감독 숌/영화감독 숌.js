const n = +require("fs").readFileSync("/dev/stdin").toString();
let num = 666;

let count = 1;

while (count !== n) {
  num++;
  if (num.toString().includes("666")) count++;
}

console.log(num);

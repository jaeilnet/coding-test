const { count } = require("console");
const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/18870/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const arr = input.shift().split(" ").map(Number);

// console.time();

// function solution(arr) {
//   let answer = [];

//   let left = 0;
//   let right = 1;
//   let count = 0;

//   let sem = 0;

//   while (left !== arr.length) {
//     if (right === arr.length) {
//       sem = 0;
//       right = 0;
//       left++;
//       answer.push(count);
//       count = 0;
//     }

//     if (sem !== arr[right] && arr[left] > arr[right]) {
//       // 1000 > 999
//       //   rigth
//       sem = arr[right];
//       count += 1;
//       //   console.log(arr[left], arr[right], count, "\n");
//     }

//     right++;
//   }
//   console.log(answer.join(" "));
// }

// solution(arr);

// const filter = arr.filter((v, i) => arr.indexOf(v) === i).sort((a, b) => a - b);

let set = new Set(arr);
let filter = [...set].sort((a, b) => a - b);

// let sum = [];
// arr.forEach((e) => {
//   let index = filter.findIndex((v) => e === v);

//   sum.push(index);
// });
// console.log(sum.join(" "));

let obj = {};

for (let k in filter) {
  obj[filter[k]] = k;
}

let sum = "";
for (let i = 0; i < arr.length; i++) {
  sum += obj[arr[i]] + " ";
}

console.log(sum);

// const sort = arr.slice().sort((a, b) => a - b);

// let answer = [];

// for (let i = 0; i < arr.length; i++) {
//   let temp = 0;
//   for (let j = 0; j < arr.length; j++) {
//     console.log(arr[i], sort[j], temp);
//     if (temp !== arr[i] && sort[j] === sort[j]) {
//       temp = sort[j];
//       answer.push(j);

//       break;
//     }
//     console.log("\n");
//   }
// }

// console.log(answer.join(" "));

// let set = new Set(arr);
// let uniq = [...set].sort((a, b) => a - b);

// let dic = {};
// uniq.forEach((e, index) => {
//   dic[e] = index;
// });
// console.log(dic);
// let answer = "";
// for (let i = 0; i < arr.length; i++) {
//   console.log(dic[arr[i]], arr[i]);
//   answer += dic[arr[i]] + " ";
// }

// console.log(answer);

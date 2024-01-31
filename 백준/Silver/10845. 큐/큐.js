const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

class Stack {
  constructor() {
    this.data = [];
  }

  push(num) {
    this.data.push(num);
    return num;
  }

  pop() {
    const pop = this.data.shift();
    if (!pop) return -1;
    return pop;
  }

  size() {
    return this.data.length;
  }

  empty() {
    return this.size() > 0 ? 0 : 1;
  }

  front() {
    return this.data[0] ?? -1;
  }

  back() {
    return this.data[this.data.length - 1] ?? -1;
  }
}

const stack = new Stack();
const result = [];

input.forEach((el) => {
  const atr = el.split(" ");

  let type = atr[0];
  let num = atr[1];

  switch (type) {
    case "push":
      stack.push(num);
      break;
    case "pop":
      const pop = stack.pop();
      result.push(+pop);
      break;
    case "size":
      result.push(+stack.size());
      break;
    case "front":
      result.push(+stack.front());
      break;
    case "back":
      result.push(+stack.back());
      break;
    case "empty":
      result.push(+stack.empty());
      break;
    default:
      break;
  }
});

console.log(result.join("\n"));

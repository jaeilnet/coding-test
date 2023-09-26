const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./problem/input.txt";

const [n, input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const stackFn = (input) => {
  const queue = input;

  let [store, stack] = [0, []];

  for (let i = 0; i < queue.length; i++) {
    while (
      (stack.length && stack[stack.length - 1] === store + 1) ||
      queue[i] === store + 1
    ) {
      if (stack[stack.length - 1] === store + 1) {
        store = stack.pop();
      } else {
        store = queue[i];
        break;
      }
    }

    if (store !== queue[i]) stack.push(queue[i]);
  }

  while (stack.length && stack[stack.length - 1] === store + 1)
    if (stack[stack.length - 1] === store + 1) {
      store = stack.pop();
    }
  return stack.length ? "Sad" : "Nice";
};

console.log(stackFn(input));

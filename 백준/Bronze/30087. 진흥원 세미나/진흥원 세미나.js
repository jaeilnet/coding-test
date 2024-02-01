const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const obj = {
  Algorithm: 204,
  DataAnalysis: 207,
  ArtificialIntelligence: 302,
  CyberSecurity: "B101",
  Network: 303,
  Startup: 501,
  TestStrategy: 105,
};

rest.forEach((el) => {
  console.log(obj[el]);
});

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

let c = 0;

const message = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.";
console.log(message);

const fn = (num) => {
  let line = "_".repeat(c * 4);
  const answer = `${line}라고 답변하였지.`;

  if (num === 0) {
    const an1 = `${line}"재귀함수가 뭔가요?"`;
    const an2 = `${line}"재귀함수는 자기 자신을 호출하는 함수라네"`;
    console.log(an1);
    console.log(an2);
    console.log(answer);
    return;
  }

  const question1 = `${line}"재귀함수가 뭔가요?"`;
  const question2 = `${line}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`;
  const question3 = `${line}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`;
  const question4 = `${line}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;

  console.log(question1);
  console.log(question2);
  console.log(question3);
  console.log(question4);
  num--;
  c++;

  fn(num);
  console.log(answer);
};

fn(num);

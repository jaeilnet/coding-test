function solution(n, m, s) {
     let answer = 0;

  let part = 0;
  s.forEach((n) => {


    if (n > part) {

      part = n + m - 1;

      answer++;
    }
  });

  return answer;
}
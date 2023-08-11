function solution(survey, choices) {
  let result = "";
  let table = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }; // 점수 테이블
  for (let i = 0; i < survey.length; i += 1) { //검사 점수 계산
    if (choices[i] < 4) table[survey[i][0]] += Math.abs(4 - choices[i]);
    else if (choices[i] > 4) table[survey[i][1]] += Math.abs(4 - choices[i]);
  }
const { R, T, C, F, J, M, A, N } = table
    return `${R >= T ? 'R' : 'T'}${C >= F ? 'C' : 'F'}${J >= M ? 'J' : 'M'}${A >= N ? 'A' : 'N'}`
}
function solution(survey, choices) {
  let result = "";
  let table = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }; // 점수 테이블
  for (let i = 0; i < survey.length; i += 1) { //검사 점수 계산
    if (choices[i] < 4) table[survey[i][0]] += Math.abs(4 - choices[i]);
    else if (choices[i] > 4) table[survey[i][1]] += Math.abs(4 - choices[i]);
  }
     table = Object.entries(table); //배열로 변경해줌
  for (let i = 0; i < 7; i += 2) {
      console.log(table[i])
    if (table[i][1] < table[i + 1][1]) result = result.concat(table[i + 1][0]);
    else result = result.concat(table[i][0]);
  }
  return result;
}
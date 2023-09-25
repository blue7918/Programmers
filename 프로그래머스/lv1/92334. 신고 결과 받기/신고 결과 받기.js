function solution(id_list, report, k) {
  //중복 신고 횟수 1회로 처리
  let set = new Set(report);
  report = Array.from(set);

  let cnt = Array.from({ length: id_list.length }, (i) => 0); //신고 횟수 저장
  let who = Array.from({ length: id_list.length }, (i) => []); //신고한 유저 저장
  for (let i = 0; i < report.length; i++) {
    report[i] = report[i].split(" "); //2차원 배열 형식으로 저장
    cnt[id_list.indexOf(report[i][1])]++;
    who[id_list.indexOf(report[i][1])].push(report[i][0]);
  }

  // k회 이상 신고당한 유저 확인 및 각 유저가 받은 메일 개수 mail에 저장
  let mail = Array.from({ length: id_list.length }, (i) => 0);
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] < k) continue;
    for (let j = 0; j < who[i].length; j++) {
      mail[id_list.indexOf(who[i][j])]++;
    }
  }
  return mail;
}
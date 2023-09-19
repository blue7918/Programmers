function solution(record) {
  const answer = [];
  const userInfo = {};
  const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
  }

  for (let i = 0; i < record.length; i++) {
    const [command, uid, nickname] = record[i].split(" ");
    if (nickname) userInfo[uid] = nickname;
    if(command !== "Change") answer.push([command, uid]);
  }
  return answer.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`;    
  })
  // answer 배열에 있는 메시지 중 유저 아이디를 최신 닉네임으로 변경
//   for (let i = 0; i < answer.length; i++) {
//     const uid = answer[i].split("님이")[0];
//     answer[i] = answer[i].replace(uid, userInfo[uid]);
//   }

//   return answer;
}
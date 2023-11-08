const convertToMin = (time) => { 
  let [hour, minute] = time.split(':');
  return parseInt(hour)*60 + parseInt(minute);
}

const solution = (book_time) => {
  let answer = [];
  
  book_time.sort().forEach(time => {
      // 입실 시간, 퇴실 시간을 각각 바꿔주기
      const start = convertToMin(time[0]);
      const end = convertToMin(time[1]);
      
      if (answer.length === 0) {
          answer.push(end + 10);
          //console.log('answer1: '+answer)
      } else {
          answer = answer.sort(); // 가장 이른 시간으로 정렬
          let flag = true; // 방 교환되었는지 체크하는 변수
          for (let i=0; i<answer.length; i++) {
              if (answer[i] <= start) {
                  // 입실시간보다 빠른 청소되어있는 방이 있으면
                  answer[i] = end + 10; // 퇴실시간+10 넣기
                  //console.log('answer2: '+answer)
                  flag = false; // 체크
                  break;
              }
          }
          // 체크가 한번도 안됬으면 새로운 방에 퇴실시간+10 넣기
          if (flag){
              //console.log('answer3: '+answer)
              answer.push(end + 10);
              
          } 
          
      }
  });
  
  return answer.length;
}
// function solution(fees, records) {
//   const cars = {};
    
//   records.forEach(v => {
//     // 정보 쪼개기
//     let [time, car, type] = v.split(" ");
        
//     const [hour, minute] = time.split(":");
        
//     // 분으로 바꾸기
//     time = hour * 60 + Number(minute);
    
//     // 처음 조회되는 차량일 시
//     if (!cars[car]) {
//       cars[car] = { time: 0, car };
//     }
        
//     cars[car].type = type;
        
//     if (type == "OUT") {
//         cars[car].time += time - cars[car].lastInTime;
//         return;
//     }
        
//     cars[car].lastInTime = time;
//   });

//   return Object.values(cars)
//     .sort((a, b) => a.car - b.car)
//     .map(v => {
//       // 차량이 최종적으로 나가지 않았을 때
//       if (v.type == "IN") {
//         v.time += 1439 - v.lastInTime;
//       }
      
//       // 기본시간을 넘지 않았을 때
//       if (fees[0] > v.time) {
//         return fees[1];
//       }
            
//       return fees[1] + Math.ceil((v.time - fees[0]) / fees[2]) * fees[3];
//     });
// }

function solution(fees, records) {
    const parkingTime = {};
    records.forEach(r => {
        let [time, id, type] = r.split(' ');
        let [h, m] = time.split(':');
        time = (h * 1) * 60 + (m * 1);
        if (!parkingTime[id]) parkingTime[id] = 0;
        if (type === 'IN') parkingTime[id] += (1439 - time);
        if (type === 'OUT') parkingTime[id] -= (1439 - time);
    });
    const answer = [];
    for (let [car, time] of Object.entries(parkingTime)) {
        if (time <= fees[0]) time = fees[1];
        else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]
        answer.push([car, time]);
    }
    return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
}
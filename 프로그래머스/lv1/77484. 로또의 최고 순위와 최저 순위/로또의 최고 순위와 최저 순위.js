// function solution(lottos, win_nums) {
//     let answer = [1,1];
//     lottos.forEach((item)=>{
//         if(item == 0) answer[1] += 1;
//         else if(!win_nums.includes(item)){
//             answer[0] += 1;   
//             answer[1] += 1;
//         }
//     })
//     answer[1] > 6 ? answer[1] = 6 : '';
//     return answer;
// }

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;
  let maxCount = minCount + zeroCount;
  return [rank[maxCount], rank[minCount]];
}
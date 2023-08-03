// function solution(N, stages) {
//     var answer = [];
    
//     for(let i = 1 ; i <= N ; i++){
//         let reach = stages.filter((stage)=> stage >= i).length;
//         let notYet = stages.filter((stage)=> stage === i).length;
//         answer.push({index: i, per:notYet/reach});
//     }
//     answer.sort((a,b)=> b.per - a.per);
//     return answer.map((item)=>item.index);
    
// }

function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
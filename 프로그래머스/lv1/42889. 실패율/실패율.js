function solution(N, stages) {
    var answer = [];
    
    for(let i = 1 ; i <= N ; i++){
        let reach = stages.filter((stage)=> stage >= i).length;
        let notYet = stages.filter((stage)=> stage === i).length;
        answer.push({index: i, per:notYet/reach});
    }
    answer.sort((a,b)=> b.per - a.per);
    return answer.map((item)=>item.index);
    
}

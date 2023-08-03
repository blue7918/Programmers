function solution(N, stages) {
    var answer = [];
    let reach = [];
    let notYet = [];
    (reach = []).length = N+1;
    (notYet = []).length = N+1;
    reach.fill(0);
    notYet.fill(0);
    
    stages.map((item)=>{
        if(item <= N) notYet[item]++;
        if(item > N) item = N;
        for(let i = 1 ; i <= item ; i++){
            reach[i]++;
        }
    })
    for(let i = 0 ; i < N ; i++){
        answer.push({index: i+1, per:notYet[i+1]/reach[i+1]});
    }
    answer.sort((a,b)=> b.per - a.per);
    return answer.map((item)=>item.index);
    
}
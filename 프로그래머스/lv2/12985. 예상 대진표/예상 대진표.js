function solution(n,a,b){
    let answer = 0;
    let teamA = Math.ceil(a/2);
    let teamB = Math.ceil(b/2);
    for(let i =1; i<=n/2 ; i++){
        console.log(teamA)
        console.log(teamB)
        answer++;
        if(teamA === teamB){
            return answer;
            break;
        }
        teamA = Math.ceil(teamA/2);
        teamB = Math.ceil(teamB/2);
    }
    return answer;
}
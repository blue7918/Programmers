function solution(citations) {
    let answer = 0;
    let cit =  citations.sort((a, b) => b - a);
    for(let i = 1 ; i <= citations.length ; i++){
        if(i<=citations[i-1]) answer++;
    }
    return answer;
}
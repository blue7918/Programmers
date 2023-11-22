function solution(citations) {
    let answer = 0;
    let cit =  citations.sort((a, b) => b - a);
    for(let i = 1 ; i <= cit.length ; i++){
        if(i<=cit[i-1]) answer++;
    }
    return answer;
}


// const solution = (citations) => citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
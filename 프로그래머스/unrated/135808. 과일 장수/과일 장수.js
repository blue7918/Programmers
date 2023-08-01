function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => b-a);
    for(let i = 1 ; i <= Math.floor(score.length/m) ; i++){
        answer += score[m*i -1] * m;
        
    }
    return answer;
}
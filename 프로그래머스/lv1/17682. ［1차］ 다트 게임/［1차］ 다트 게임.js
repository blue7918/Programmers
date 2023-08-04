 function solution(dartResult) {
    var answer = [0,0,0];
    let answerIndex = 0;
    let bonus = {"S":1, "D":2, "T":3};
    
    for(let i = 0; i < dartResult.length; i++){
        var char = dartResult[i];
        if(/[0-9]/.test(char)){
            if(dartResult[i]==='1' && dartResult[i+1]==='0') {
                answer[answerIndex] += 10;
                i++;
            } else answer[answerIndex] +=dartResult[i];
        }else if(/[A-Z]/.test(char)){
            answer[answerIndex] = Math.pow(answer[answerIndex], bonus[char]);
            answerIndex++;
        }else if(char ==='*') {
            if(answerIndex > 1){
                answer[answerIndex -1] *= 2;
                answer[answerIndex - 2] *= 2;    
            }else answer[answerIndex -1] *= 2;
        } else if( char === '#') answer[answerIndex -1] *= (-1);
    }
    return answer.reduce((a,b)=>a+b,0)
}
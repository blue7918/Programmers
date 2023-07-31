function solution(k, score) {
    var answer = [];
    return [...score].map((item, index)=>{
        answer[index] = item;
        answer.sort((a,b)=> b-a);
        return index < k ? answer[index] : answer[k-1];
    })
    
}
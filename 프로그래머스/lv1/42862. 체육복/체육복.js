function solution(n, lost, reserve) {
    let student = n -lost.length;
    lost = lost.sort((a,b)=>a-b);
    reserve = reserve.sort((a,b)=>a-b);
    for(let j = 0 ; j < reserve.length ; j++) {
        for(let i = 0 ; i < lost.length ; i++){
            if(lost[i] ==  reserve[j]){
                delete(lost[i]);
                delete(reserve[j]);
                student++;
            }    
        }   
    }
    for(let j = 0 ; j < reserve.length ; j++) {
        for(let i = 0 ; i < lost.length ; i++){
            if(lost[i] == reserve[j] - 1 || lost[i] ==  reserve[j] + 1 ){
                delete(lost[i]);
                delete(reserve[j]);
                student++;
            }    
        }   
    }
    return student >= n ? n : student;
}
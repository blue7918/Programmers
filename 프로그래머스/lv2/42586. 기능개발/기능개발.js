function solution(progresses, speeds) {
    let answer = [0];
    let time = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let index = time[0];
    for(let i = 0, j = 0; i < speeds.length; i++){
        if(index >= time[i]) ++answer[j];
        else{
            index = time[i];
            answer[++j] = 1;
        }
    }
    return answer;
}

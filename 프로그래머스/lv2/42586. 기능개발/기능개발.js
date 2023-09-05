function solution(progresses, speeds) {
    let answer = [];
    let time = [];
    for(let i = 0; i < speeds.length; i++){
        time.push( Math.ceil((100 - progresses[i]) / speeds[i]) )
    }
    let count = 0;
    let index = time[0];
    for(let i = 0; i < speeds.length; i++){
        if(index >= time[i]) count++
        else{
            index = time[i];
            answer.push(count);
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}
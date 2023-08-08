function solution(participant, completion) {
    completion = completion.sort();
    participant = participant.sort();
    for(let i =0; i < participant.length ; i++){
        if(completion[i] != participant[i]) return participant[i];
    }
}
// var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))
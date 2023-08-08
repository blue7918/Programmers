// function solution(participant, completion) {
//     completion = completion.sort();
//     participant = participant.sort();
//     for(let i =0; i < participant.length ; i++){
//         if(completion[i] != participant[i]) return participant[i];
//     }
//     // participant.map((item, index)=>{
//     //     if(item != completion[index]) console.log(item);
//     // });
// }
var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))
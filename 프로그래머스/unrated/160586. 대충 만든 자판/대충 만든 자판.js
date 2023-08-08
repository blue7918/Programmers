// function solution(keymap, targets) {
//     var answer = [];
//     let keyArray = [];
//     keymap.map((key)=>{
//         for(let i = 0 ; i < key.length ; i++){
//             let index = key[i].charCodeAt()-65;
//             keyArray[index]? keyArray[index] = Math.min(keyArray[index], i+1) : keyArray[index] = i+1;
//         }
//     })
//     console.log(keyArray)
//     targets.map((word)=>{
//         let sum = 0;
//         for(let i = 0 ; i < word.length ; i++){
//             let value = keyArray[word[i].charCodeAt()-65]
//             if(value) sum += value;
//             else{
//                 sum = -1;
//                 break;
//             }
//         }
//         answer.push(sum);
//     })
//     return answer;
// }

function solution(keymap, targets) {
    const answer = [];
    const map = {}
    for (const items of keymap) {
        items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
    }
    for (const items of targets) {
        answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
    }
    return answer;
}
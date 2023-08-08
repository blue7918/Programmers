function solution(keymap, targets) {
    var answer = [];
    let keyArray = [];
    keymap.map((key)=>{
        for(let i = 0 ; i < key.length ; i++){
            let index = key[i].charCodeAt()-65;
            keyArray[index]? keyArray[index] = Math.min(keyArray[index], i+1) : keyArray[index] = i+1;
        }
    })
    console.log(keyArray)
    targets.map((word)=>{
        let sum = 0;
        for(let i = 0 ; i < word.length ; i++){
            let value = keyArray[word[i].charCodeAt()-65]
            if(value) sum += value;
            else{
                sum = -1;
                break;
            }
        }
        answer.push(sum);
    })
    return answer;
}
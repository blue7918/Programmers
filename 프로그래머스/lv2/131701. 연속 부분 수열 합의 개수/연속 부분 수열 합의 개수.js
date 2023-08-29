function solution(elements) {
    let arr = [];
    let len = elements.length
    for(let i = 0; i < len ; i++){
       let sum = 0;
        for(let j = 0 ; j < len; j++){
            sum += elements[(i+j)%len];
            arr.push(sum)
        }
     
    }
    let answer = [...new Set(arr)];
    return answer.length;
}

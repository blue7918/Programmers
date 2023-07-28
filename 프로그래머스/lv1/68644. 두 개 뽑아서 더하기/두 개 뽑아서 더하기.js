function solution(numbers) {
    let array = [];
    for(let i =0 ; i<numbers.length;i++){
        for(let j=i+1; j<numbers.length;j++){
            array.push(numbers[i] + numbers[j]);
            
        }
    }
    let result = [...new Set(array)];
    result.sort((a,b)=>a-b)
    return result;
}
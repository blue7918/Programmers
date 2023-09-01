function solution(arr1, arr2) {
    let answer = [];
    for(let y = 0 ; y < arr1.length ; y++){
        let array = [];
        for(let x = 0 ; x < arr2[0].length; x++){
            let sum = 0;
            for(let i = 0; i < arr2.length; i++){
                sum += arr1[y][i] * arr2[i][x];
            }
            array.push(sum)
        }
        answer.push(array);
    }
    return answer;
}
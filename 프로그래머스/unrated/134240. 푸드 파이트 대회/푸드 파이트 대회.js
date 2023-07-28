function solution(food) {
    var answer = '';
    for(let i = 1; i < food.length ; i++){
        let repeatNum = food[i] / 2;
        answer += i.toString().repeat(repeatNum);
    }
    answer += '0' + answer.split("").reverse().join("");
    
    return answer;
}
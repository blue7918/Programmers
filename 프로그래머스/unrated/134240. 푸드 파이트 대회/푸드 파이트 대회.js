function solution(food) {
    var answer = '';
    for(let i = 1; i < food.length ; i++){
        answer += i.toString().repeat(food[i] / 2);
    }
    //answer += '0' + answer.reverse().join("");
    //return answer;
    return answer + '0' + [...answer].reverse().join('');
}
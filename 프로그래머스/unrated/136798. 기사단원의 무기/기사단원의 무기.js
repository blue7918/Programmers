const getDivisors = (num) => {
    let divisors = 0;
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors++;
            if(num / i != i) divisors++;
        }
    }
    return divisors;
}

function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1 ; i <= number; i++){
        //getDivisors(i) > limit ? answer += power : answer += getDivisors(i); 이게 조금 더 느린 것 같아서 아래와 같이 변경
        let temp = getDivisors(i);
        temp > limit ? answer += power : answer += temp;
    }
    return answer;
}
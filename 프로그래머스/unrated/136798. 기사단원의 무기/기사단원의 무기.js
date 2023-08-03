function solution(number, limit, power) {
    var answer = 0;
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
    for(let i = 1 ; i <= number; i++){
        let temp = getDivisors(i);
        temp > limit ? answer += power : answer += temp;
    }
    return answer;
}
const isPrime = (n) => {
    for(let i=3;i<=Math.sqrt(n);i+=2){
        if(n%i == 0){
            return false;
        }
    }
    return true;    
}

function solution(n) {
    var answer = 1;
    if(n > 3) answer++;
    for(let i = 5 ; i <= n; i += 2){
        if(isPrime(i)) answer++;
    }
    return answer;
}
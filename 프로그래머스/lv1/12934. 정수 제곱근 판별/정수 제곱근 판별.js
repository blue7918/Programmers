function solution(n) {
    var answer = 0;
    let sqrt  = Math.sqrt(n)
    return (sqrt % 1 === 0)? answer += Math.pow(sqrt+1, 2) : -1;
}

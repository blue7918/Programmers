function solution(n, t, m, p) {
    let array = '';
    let answer = '';
    for(let i = 0 ; i <  m * (t - 1) + p ; i++) array += i.toString(n);
    for(let i = 0 ; i < t; i++) answer += array.charAt(i*m+p-1).toUpperCase();
    return answer;
}
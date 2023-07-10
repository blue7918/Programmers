function solution(n) {
    // var answer = '';
    // for(let i=1;i <= n;i++){
    //     i % 2 == 0 ? answer += '박' : answer += '수'
    // }
    // return answer;
    return "수박".repeat(n).slice(0,n)
}
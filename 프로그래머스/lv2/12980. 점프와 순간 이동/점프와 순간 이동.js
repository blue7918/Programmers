// function solution(n) {
//     return n.toString(2).match(/1/g).length;
// }
function solution(n) {
    let answer = 0;
    while(n > 0) {
        if(n % 2 === 0) {
            n /= 2;
        } else {
            n--;
            answer++;
        }
    }
    
    return answer;
}
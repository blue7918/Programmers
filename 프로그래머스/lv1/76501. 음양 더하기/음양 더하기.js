// function solution(absolutes, signs) {
//     let answer = 0;
//     absolutes.map((item, index)=>( signs[index] ? answer += item : answer -= item))
//     return answer;
// }

function solution(absolutes, signs) {
    return absolutes.reduce(((acc, val, i)=>signs[i]? acc += val : acc -= val ),0)
}
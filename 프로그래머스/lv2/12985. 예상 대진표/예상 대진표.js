// function solution(n,a,b){
//     let answer = 0;
//     for(let i =1; i<=n/2 ; i++){
//         a = Math.ceil(a/2);
//         b = Math.ceil(b/2);
//         answer++;
//         if(a === b){
//             return answer;
//         }
//     }
// }
// function solution(n,a,b){
//     let answer = 0;
//     while(a !== b) {
//         a = Math.ceil(a/2);
//         b = Math.ceil(b/2);
//         answer++;
//     }
//     return answer;
// }
function solution( n,  a,  b){
    return ((a-1)^(b-1)).toString(2).length;
}
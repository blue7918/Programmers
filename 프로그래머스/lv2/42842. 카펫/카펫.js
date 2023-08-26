// function solution(brown, yellow) {
//     for(let i =1; i <= brown; i++){
//         for(let j = 1 ; j <= i; j++){
//             if(i*j===yellow && (i+2)*2+(j)*2 === brown) return [i+2,j+2]
//         }
//     }
// }
function solution(brown, yellow) {
    let total = brown + yellow;

    for (let i = 3; i <= Math.sqrt(total); i++) {
        if (total % i != 0) continue;
        if ((i - 2) * (total / i - 2) == yellow) return [total / i, i];
    }
    return null;
}
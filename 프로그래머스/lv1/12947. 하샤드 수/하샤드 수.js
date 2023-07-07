function solution(x) {
//     let sum = 1;
//     let result = String(x).split('')
 
//     for (let i = 0; i < result.length; i++) {
//         sum += parseInt(result[i])
//     }
//     return (x % sum === 0);
     return (x % (x+"").split("").reduce((acc, cur) => acc + parseInt(cur), 0) === 0)
}
// function solution(n) {
//     let sqrt5 = Math.sqrt(5);
//     let result =  (1/sqrt5) * (Math.pow((1+sqrt5)/2, n) - Math.pow((1-sqrt5)/2, n));
//     return parseInt(result%1234567);
// }

function solution(n) {
    let fib = [0, 1];
    for(let i=2; i<=n; i++) {
        fib[i] = (fib[i-1]+fib[i-2])%1234567;
    }
    
    return fib[n];
}
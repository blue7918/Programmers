// const isPrime = (n) => {
//     for(let i=3;i<=Math.sqrt(n);i+=2){
//         if(n%i == 0){
//             return false;
//         }
//     }
//     return true;    
// }

// function solution(n) {
//     var answer = 1;
//     if(n > 3) answer++;
//     for(let i = 5 ; i <= n; i += 2){
//         if(isPrime(i)) answer++;
//     }
//     return answer;
// }

function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}
function solution(s) {
    let arr = s.split(/\s+/); 
    arr.sort((a,b)=>a-b);
    return (Math.min(...arr)+" "+Math.max(...arr));
}
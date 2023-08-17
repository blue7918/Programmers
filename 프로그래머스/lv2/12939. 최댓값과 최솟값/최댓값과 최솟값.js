function solution(s) {
    let arr = s.split(/\s+/); 
    arr.sort((a,b)=>a-b);
    return (arr[0].concat(" ", arr[arr.length -1]));
}
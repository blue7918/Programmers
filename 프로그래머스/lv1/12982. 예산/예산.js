function solution(d, budget) {
    let index = d.length;
    d.sort((a, b) => a - b);
    while (d.slice(0,index).reduce((acc, cur)=> acc + cur ,0) > budget){
        console.log(index)
        index --;
    
    }
    return index  ;
}
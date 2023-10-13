function solution(order) {
    let stack = [];
    let idx = 0;
    for(let i = 1; i <= order.length; i++){
        if(order[idx] !== i) stack.push(i);
        else{
            idx++;
        }
        
        while(stack.length !== 0 && stack.at(-1) === order[idx]){
            stack.pop();
            idx++;
        }
   
    }
    return idx;
}
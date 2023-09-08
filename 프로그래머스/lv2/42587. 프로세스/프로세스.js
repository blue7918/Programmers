function solution(priorities, location) {
    let list = priorities.map((priority,index)=>({
        index : index === location,
        priority : priority
    }));
    let count = 0;        
    while(list.length > 0){
        let first = list.shift();        
        if(list.some(i=> i.priority > first.priority )){
            list.push(first);                        
        }
        else{            
            count++;
            if(first.index) return count;
        }
    }
}


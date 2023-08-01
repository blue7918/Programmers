function solution(nums) {
    var answer = 0;
    
    for(let i = 0 ; i < nums.length-2 ; i++){
        for(let j = i+1 ; j < nums.length-1 ; j++){
            for(let k = j+1 ; k < nums.length ; k++){
                let sum = nums[i] + nums[j] + nums[k];
                let count = 0;
                for(let l = 2 ; l < sum/2 ; l++){
                    if(sum % l === 0){
                        count ++;
                        break;
                    }
                }
                if(count === 0) answer++;
                count = 0;
                
            }
        }
    }
    
    return answer;
}
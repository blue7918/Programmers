function solution(answers) {
    var answer = [];
    let result = [0,0,0];
    
    let type1 = [1,2,3,4,5]; //5
    let type2 = [2,1,2,3,2,4,2,5]; //8
    let type3 = [3,3,1,1,2,2,4,4,5,5]; //10
    
    answers.map((i, index)=>{
        type1[index % 5] === i ? result[0]++ : '';
        type2[index % 8] === i ? result[1]++ : '';
        type3[index % 10] === i ? result[2]++ : '';
    })
    
    result.map((i, index)=>{
        Math.max(...result) === i ? answer.push(index+1) : '';   
    })
    return answer;
}
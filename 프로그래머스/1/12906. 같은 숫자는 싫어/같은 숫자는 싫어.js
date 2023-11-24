function solution(arr)
{
    // answer1
    // let answer = [];
    // let index  = 1;
    // answer [0] = arr[0];
    // for(let i = 1; i<arr.length ; i++){
    //     if(arr[i] != arr[i-1]){
    //         answer[index] = arr[i];
    //         index++;
    //     }
    // }
    // return answer;
    
    //answer2
    return arr.filter((val,index) => val != arr[index+1]);
    
}
//answer3
// const solution=_=>_.filter((i,$)=>i!=_[--$]);
function solution(arr)
{
    let answer = [];
    let index  = 1;
    answer [0] = arr[0];
    for(let i = 1; i<arr.length ; i++){
        if(arr[i] != arr[i-1]){
            answer[index] = arr[i];
            index++;
        }
    }
    return answer;
}
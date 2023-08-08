function solution(s) {
    let result = 0 ;
    let x = s[0];
    let countX = 0;
    let countOther = 0;
    
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === x) ++countX;
        else ++countOther;
        if(countX != 0 && countX === countOther){
            countX = 0; countOther = 0; ++result; x = s[i+1];
        }
        
    }
    return countX != countOther ? result+1 : result;
}
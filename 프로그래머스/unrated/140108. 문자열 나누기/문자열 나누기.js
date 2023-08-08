function solution(s) {
    let result = 0 ;
    let index = 0 ;
    let x = "";
    let countX = 0;
    let countOther = 0;
    
    for(let i = 0 ; i < s.length ; i++){
        x = s[index];
        if(s[i] === x) ++countX;
        else ++countOther;
        if(countX != 0 && countX === countOther){
            index = i+1; countX = 0; countOther = 0; ++result; x = s[index];
        }
        
    }
    return countX != countOther ? result+1 : result;
}
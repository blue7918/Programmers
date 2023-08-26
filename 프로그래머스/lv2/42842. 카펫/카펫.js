function solution(brown, yellow) {
    for(let i =1; i <= brown; i++){
        for(let j = 1 ; j <= i; j++){
            if(i*j===yellow && (i+2)*2+(j)*2 === brown) return [i+2,j+2]
        }
    }
}
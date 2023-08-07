function solution(X, Y) {
    let answer = ''
    X = X.split("")
    Y = Y.split("")
    for(let i = 9 ; i >= 0 ; i--) {
        const resultX = X.filter(a => Number(a) === i).length
        const resultY = Y.filter(a => Number(a) === i).length
        answer+=(i).toString().repeat(Math.min(resultX, resultY))
    }
    if(answer === '') return "-1"
    if(Number(answer) === 0) return "0"
    return answer.split("").sort((a,b) => Number(b)-Number(a)).join("")
}
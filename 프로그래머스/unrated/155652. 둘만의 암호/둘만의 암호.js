function solution(s, skip, index) {
    let answer = ""
    for(let apt of s) { 
        let aptCode = apt.charCodeAt() // 현재 알파벳의 코드 번호
        
        let tempIndex = index;
        while (tempIndex > 0) {
            aptCode = aptCode === 122 ? 97 : aptCode + 1 // z인 경우만 a로 변경
            if (!skip.includes(String.fromCharCode(aptCode)))  tempIndex -= 1  
        }
        answer += String.fromCharCode(aptCode) // s -> 이동한 알파벳
    }
    return answer
}
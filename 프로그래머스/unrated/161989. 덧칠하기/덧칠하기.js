function solution(n, m, section) {
    var answer = 1;
    let last = section[0] + m - 1;
    for(let i = 1 ; i < section.length; i++){
        if(section[i] > last) {
            last = section[i] + m - 1;
            answer++;
        }
    }
    return answer;
}
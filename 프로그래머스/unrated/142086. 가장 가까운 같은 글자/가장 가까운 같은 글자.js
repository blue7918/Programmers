function solution(s) {
    var answer = [];
    let check = {};
    for(let i =0 ; i<s.length;i++){
        check[s[i]] === undefined ? answer[i] = -1 : answer[i] = i - check[s[i]];
        check[s[i]] = i;
    }
    return answer;
}
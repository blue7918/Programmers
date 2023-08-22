function solution(s) {
    let answer = [0,0];
    
     while(s !== '1') {
        s = s.split('');
        let len = s.filter(v => v === '1').length;
        answer[0] ++;
        answer[1] += s.length - len;
        s = len.toString(2);
    }
    return answer;
}
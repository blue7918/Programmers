function solution(s) {
    let result  = s.split(' ').map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    return result.join(' ');
}
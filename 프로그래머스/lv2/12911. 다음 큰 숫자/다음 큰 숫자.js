function solution(n) {
    let count = n+1;
    const one = n.toString(2).split("1").length;
    for(; count <= 1000000 ; count++) {
        if (count.toString(2).split("1").length === one) {
            return count;
            break;
        }   
    }
}
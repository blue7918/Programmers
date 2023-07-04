function solution(numbers) {
    var answer = 45;
    return answer-numbers.reduce(((acc, el)=> acc+el),0);
}
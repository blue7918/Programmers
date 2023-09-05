function solution(s) {
    let answer = [];
    let tuples = s.slice(2, -2).split(/},{/g).sort((a, b) => a.length - b.length);

    tuples.forEach(t => {
        let tuple = t.split(',');
        answer.push(tuple.find(i => !answer.includes(i)));
    });
    return answer.map(i => Number(i));
}
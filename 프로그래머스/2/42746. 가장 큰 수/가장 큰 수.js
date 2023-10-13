
function solution(numbers) {
    let result = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a) - (a+b))
                        .join('');

    return result[0] === '0' ? '0' : result ;
}
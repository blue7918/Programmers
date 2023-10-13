
function solution(numbers) {
    let result = numbers.sort((a,b) => ('' + b + a) - ('' + a + b))
                        .join('');

    return result[0] === '0' ? '0' : result ;
}
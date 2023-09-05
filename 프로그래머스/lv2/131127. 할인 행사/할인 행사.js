function solution(want, number, discount) {
    let result = 0
     for (let i = 0; i < discount.length - 9; i++) {
        const check = discount.slice(i, i+10);

        let flag = true;
        for (let j = 0; j < want.length; j++) {
            if (check.filter(item => item === want[j]).length !== number[j]) {
                flag = false;
                break;
            }
        }
        if (flag) result += 1;
    }

    return result
}
function solution(price, money, count) {
    const cal = (n) => {
      let result = 0;
        for (let i = 1; i <= n; i++) {
        result = result + i * price;
      }
      return result;
    }
    let result = cal(count);
    return result > money ? result - money : 0 
}
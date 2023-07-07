function solution(price, money, count) {
    function factorial(n) {
      let result = 0;
        for (let i = 1; i <= n; i++) {
        result = result + i * price;
      }
      return result;
    }
    let result = factorial(count);
    return result > money ? result - money : 0 
}
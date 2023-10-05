// function solution(topping) {
//   let answer = 0;

//   const allTopping = new Map();
//   const bro = new Map();

//   topping.forEach((n) => {
//     allTopping.set(n, (allTopping.get(n) || 0) + 1);
//   });

//   for (let n of topping) {
//     allTopping.set(n, allTopping.get(n) - 1);
//     bro.set(n, true);
//     if (!allTopping.get(n)) allTopping.delete(n);
//     if (allTopping.size === bro.size) answer++;
//     if (allTopping.size < bro.size) break;
//   }

//   return answer;
// }

function solution(topping) {
  const [b1Dict, b1Arr, b2Dict, b2Arr] = [new Set(), [], new Set(), []];
  topping.forEach((t1, i) => {
    const t2 = topping.at(-i);
    b1Dict.add(t1);
    if (i !== 0) b2Dict.add(t2);
    b1Arr.push(b1Dict.size);
    b2Arr.push(b2Dict.size);
  });
  return b1Arr.reduce(
    (acc, cur, i) => (cur === b2Arr.at(-i - 1) ? acc + 1 : acc),
    0
  );
}
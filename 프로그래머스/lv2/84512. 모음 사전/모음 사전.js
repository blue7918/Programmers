function solution(word) {
  const dic = {A: 0, E: 1, I: 2, O: 3, U: 4};
  const plus = [781, 156, 31, 6, 1];
    return word.split("").reduce((acc, ch, idx) => acc + dic[ch] * plus[idx] + 1, 0);
}
function solution(n, words) {
  let last = [];
  for (let i = 0; i < words.length; i++) {
     if (i === 0) last.push(words[i]);
     else if(last.includes(words[i]) || words[i - 1][words[i - 1].length - 1] !== words[i][0])  return [(i % n) + 1, parseInt(i / n) + 1];
     else last.push(words[i]);         
  }

  return [0, 0];
}
function solution(name) {
  var answer = 0;
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let currentAlPhabet = name.charCodeAt(i);

    if (currentAlPhabet < 78) {
      answer += currentAlPhabet % 65;
    } else {
      answer += 91 - currentAlPhabet;
    }

    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex += 1;
    }

    min = Math.min(
      min,
      i * 2 + name.length - nextIndex, // 먼저 오른쪽으로 가기  A의 앞에 있는 알파벳들이 뒤에 있는 알파벳의 수보다 적을 경우 최소가 된다.
      i + (name.length - nextIndex) * 2 // 처음부터 반대로 가기
    );
  }
  answer += min;
  return answer;
}
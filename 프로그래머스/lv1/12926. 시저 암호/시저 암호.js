function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") result += " ";
    else {
      //아스키 코드로 변경
      let code = s.charCodeAt(i);
      //대문자
      if (code <= 90) {
        code += n;
        if (code > 90) code -= 26;
      }
      //소문자
      else {
        code += n;
        if (code > 122) code -= 26;
      }
      //문자로 변환
      result += String.fromCharCode(code);
    }
  }
  return result;
}
function solution(name, yearning, photo) {
  
  const memory = {};
  for (let i = 0; i < name.length; i++) {
      //memory[이름]=해당점수
    memory[name[i]] = yearning[i];
  }
  // 각 포토 마다의 점수를 배열로 구해야 하므로 map을 이용한다.
  return photo.map((arr) =>
    // memory에 해당 사람이 있으면 점수, 없으면 0을 더해줌
    arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
  );
}
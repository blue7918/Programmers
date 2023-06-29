function solution(players, callings) {
    let indexs = {};
    for (let i = 0; i < players.length; i++) {
        //callings를 이름으로 받아오고 indexOf 쓰면 시간초과나니깐 ['이름': 순위] 이러한 형태의 array 사용하기로 함
        indexs[players[i]] = i;
    }
    callings.forEach((player)=>{
        //indexs에서 현재 순위 받아옴
        const fasterIndex = indexs[player];
        const slower = players[fasterIndex - 1];
        
        //players array의 값 수정
        players[fasterIndex - 1] = player;
        players[fasterIndex] = slower;
        
        //index 값의 순위 조정
        indexs[player]--;
        indexs[players[fasterIndex]]++;
    });
    //바꿔준 players array 출력
    return players;
}
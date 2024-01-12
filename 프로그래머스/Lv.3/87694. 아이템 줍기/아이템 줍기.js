function solution(rectangle, characterX, characterY, itemX, itemY) {
    //각 좌표를 2배씩 해줌
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    let doubleRec = rectangle.map((rec)=>(rec.map(point => point*2)));
    
    const moveX = [1, -1, 0, 0];
    const moveY = [0, 0, 1, -1];
    
    const start = [characterX, characterY, 0]; //시작 위치
    let que = [start];
    
    let range = Array.from({ length: 103 }, () => Array(103).fill((0)))
    
    //테두리 체크
    doubleRec.forEach(([x1, y1, x2, y2])=>{
        for(let i = x1; i <= x2; i++){
            for(let j = y1; j <= y2; j++){
                if(i === x1 || i === x2 || j === y1 || j === y2){
                    if(range[i][j] === 0) range[i][j] = 1;    
                } else range[i][j] = 2;
                
            }
        }
    });
    
    range[characterX][characterY] = 0;
    
    //bfs
    while(que.length > 0){
        let [x,y,move] = que.shift();
        if(x === itemX && y === itemY) return move/2;
        
        for(let i = 0; i<4;i++){
            let nx = x+moveX[i];
            let ny = y+moveY[i];
            if(range[nx][ny] === 1){
                que.push([nx, ny, move+1]);
                range[nx][ny] = 0;
            }
        }
    }
    
    return 0;
    
}
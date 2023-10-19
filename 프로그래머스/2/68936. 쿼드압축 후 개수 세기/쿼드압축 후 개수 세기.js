// function solution(arr) {
//     const answer = [0, 0];
//     const m = arr.length;
    
//     const check = (sx, sy, length) => {
//         const first = arr[sx][sy];
//         const half = Math.floor(length / 2);
        
//         for(let i = sx; i < sx + length; i++){
//             for(let j = sy; j < sy + length; j++){
//                 if(arr[i][j] !== first){
//                     check(sx, sy, half);
//                     check(sx + half, sy, half);
//                     check(sx, sy + half, half);
//                     check(sx + half, sy + half, half);
                    
//                     return;
//                 }
//             }
//         }
        
//         answer[first]++;
//     }
    
//     check(0, 0, m);
    
//     return answer;
// }

function solution(arr) {
    const quadZip = (row, col, n) => {
        if(n < 2) return arr[row][col] ? [0, 1] : [1, 0];
        let cnt0 = 0, cnt1 = 0; n >>= 1;
        for(let [i, j] of [[0,0],[0,1],[1,0],[1,1]]) {
            let [zero, one] = quadZip(row+i*n, col+j*n, n);
            cnt0 += zero;
            cnt1 += one;
        }
        if(cnt0 === 0) return [0, 1];
        if(cnt1 === 0) return [1, 0];
        return [cnt0, cnt1];
    }
    return quadZip(0, 0, arr.length);
}
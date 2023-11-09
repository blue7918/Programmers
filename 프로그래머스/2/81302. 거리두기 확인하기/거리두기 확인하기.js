function solution(places) {
   const leng = places[0].length;
   return places.map(v => {
       let check = 1;
       Loop2 :
       for(let j = 0; j < leng; j++){
           if(v[j].includes('PP') || v[j].includes('POP')) {
               check = 0;
               break;
           }
           for(let k = 0; k < leng; k++){
               if(j < leng-2 && v[j][k]==='P' && 
                  v[j+1][k]==="O" && v[j+2][k]==="P") {
                       check = 0;
                       break Loop2;
               } // 세로 POP
               else if(j < leng-1 && v[j][k]==='P' && v[j+1][k]==="P") {
                       check = 0;
                       break Loop2;
               } // 세로 PP
               else if(j < leng-1 && k < leng -1 && (v[j][k]==='P' && v[j+1][k+1]==='P') &&
                      (v[j+1][k]==='O' || v[j][k+1]==='O')) {
                       check = 0;
                       break Loop2;
               } // 대각선 PO  PX  PO
                 //       OP  OP  XP
               else if(j < leng-1 && k < leng -1 && (v[j][k+1]==='P' && v[j+1][k]==='P') &&
                      (v[j][k]==='O' || v[j+1][k+1]==='O')) {
                       check = 0;
                       break Loop2;
               } // 반대 대각선 OP  XP  OP
                 //           PO  PO  PX
           }
       }
       return check;
   })
}
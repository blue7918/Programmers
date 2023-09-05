function solution(clothes) {
    return Object.values(clothes.reduce((ac,v)=>({...ac, [v[1]]:(ac[v[1]] || 0)+1}),{})).reduce((ac,v)=> ac*(v+1), 1)-1;
}
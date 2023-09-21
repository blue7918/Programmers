// function solution(skill, skill_trees) {
//     function isCorrect(n) {
//         let test = skill.split('');
//         for (var i = 0; i < n.length; i++) {
//             if (!skill.includes(n[i])) continue;
//             if (n[i] === test.shift()) continue;
//             return false;
//         }
//         return true;
//     }    

//     return skill_trees.filter(isCorrect).length;
// }

function solution(skill, skill_trees) {
    return skill_trees.filter(tree => skill.indexOf(tree.split('').filter(s => skill.split('').includes(s)).join('')) === 0).length;
}
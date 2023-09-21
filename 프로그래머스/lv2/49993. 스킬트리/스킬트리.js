function solution(skill, skill_trees) {
    function isCorrect(tree) {
        let temp = skill.split('');
        for (let i = 0; i < tree.length; i++) {
            if (!skill.includes(tree[i])) continue; //해당 문자가 skill에 포함되어있지 않음
            if (tree[i] === temp.shift()) continue; //skill을 순서대로 하나씩 제거해가며 확인
            return false;
        }
        return true;
    }    

    return skill_trees.filter(isCorrect).length;
}